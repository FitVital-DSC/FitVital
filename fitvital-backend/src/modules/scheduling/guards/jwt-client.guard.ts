import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Request } from 'express';

interface JwtPayload {
  clientId?: unknown;
  exp?: number;
}

@Injectable()
export class JwtClientGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request & { clientId?: string }>();
    const authorization = request.headers.authorization;
    request.clientId = this.verify(authorization ?? '');
    return true;
  }

  verify(authorization: string): string {
    if (!authorization?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authentication required');
    }

    const token = authorization.slice('Bearer '.length).trim();
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new UnauthorizedException('Invalid bearer token');
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new UnauthorizedException('Authentication is not configured');
    }

    const [header, payloadPart, signature] = parts;
    let headerPayload: { alg?: unknown };
    try {
      headerPayload = JSON.parse(
        Buffer.from(header, 'base64url').toString('utf8'),
      ) as { alg?: unknown };
    } catch {
      throw new UnauthorizedException('Invalid bearer token');
    }
    if (headerPayload.alg !== 'HS256') {
      throw new UnauthorizedException('Invalid bearer token');
    }
    const expected = createHmac('sha256', secret)
      .update(`${header}.${payloadPart}`)
      .digest();
    let received: Buffer;
    try {
      received = Buffer.from(signature, 'base64url');
    } catch {
      throw new UnauthorizedException('Invalid bearer token');
    }

    if (
      received.length !== expected.length ||
      !timingSafeEqual(received, expected)
    ) {
      throw new UnauthorizedException('Invalid bearer token');
    }

    let payload: JwtPayload;
    try {
      payload = JSON.parse(
        Buffer.from(payloadPart, 'base64url').toString('utf8'),
      ) as JwtPayload;
    } catch {
      throw new UnauthorizedException('Invalid bearer token');
    }

    if (typeof payload.exp === 'number' && payload.exp * 1000 <= Date.now()) {
      throw new UnauthorizedException('Bearer token expired');
    }

    if (typeof payload.clientId !== 'string' || payload.clientId.length === 0) {
      throw new ForbiddenException('Authorized identity is missing');
    }

    return payload.clientId;
  }
}
