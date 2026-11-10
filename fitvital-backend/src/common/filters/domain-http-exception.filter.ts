import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { SchedulingAlreadyConfirmedException } from '../exceptions/schedulingAlreadyConfirmed.exception.js';
import { CapacityExceededException } from '../exceptions/capacityExceeded.exception.js';
import { StudentDefaulterException } from '../exceptions/studentDefaulter.exception.js';
import type { Response } from 'express';

type DomainExceptionClass = new (...args: any[]) => Error;

const DOMAIN_EXCEPTION_TO_HTTP_STATUS = new Map<DomainExceptionClass, HttpStatus>([
    [SchedulingAlreadyConfirmedException, HttpStatus.BAD_REQUEST],
    [CapacityExceededException, HttpStatus.CONFLICT], // 409
    [StudentDefaulterException, HttpStatus.UNPROCESSABLE_ENTITY], // 422
]);

@Catch()
export class DomainHttpExceptionFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void {
        const status = this.resolveStatus(exception);
        if (status == undefined) {
            return super.catch(exception, host); 
        }

        const error = exception as Error;
        const response = host.switchToHttp().getResponse<Response>();

        response.status(status).json({
            statusCode: status,
            message: error.message,
            error: error.name,
        });
    }

    private resolveStatus(exception: unknown): HttpStatus | undefined {
        for (const [exceptionClass, status] of DOMAIN_EXCEPTION_TO_HTTP_STATUS.entries()) {
            if (exception instanceof exceptionClass) {
                return status;
            }
        }
        return undefined;
    }
}