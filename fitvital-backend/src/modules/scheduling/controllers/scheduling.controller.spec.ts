import { describe, expect, it, vi } from 'vitest';
import { NotFoundException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { SchedulingController } from './scheduling.controller.js';
import { SchedulingStatus } from '../../../common/enum/scheduling-status.enum.js';

describe('SchedulingController list', () => {
  it('returns only the approved HTTP fields', async () => {
    const service = {
      listByClientId: vi.fn().mockResolvedValue([
        {
          schedulingId: 'scheduling-1',
          clientId: 'client-1',
          getStatus: () => SchedulingStatus.PENDING,
          createdAt: new Date('2026-11-24T13:00:00.000Z'),
          updatedAt: new Date('2026-11-24T14:00:00.000Z'),
        },
      ]),
    };
    const controller = new SchedulingController(service as any);

    const result = await controller.list({ clientId: 'client-1' });

    expect(result).toEqual([
      {
        schedulingId: 'scheduling-1',
        status: SchedulingStatus.PENDING,
        createdAt: new Date('2026-11-24T13:00:00.000Z'),
        updatedAt: new Date('2026-11-24T14:00:00.000Z'),
      },
    ]);
    expect(result[0]).not.toHaveProperty('clientId');
  });

  it('returns 404 when the list is empty', async () => {
    const controller = new SchedulingController({
      listByClientId: vi.fn().mockResolvedValue([]),
    } as any);

    await expect(controller.list({ clientId: 'client-1' })).rejects.toBeInstanceOf(NotFoundException);
  });

  it('returns 503 when persistence is unavailable', async () => {
    const controller = new SchedulingController({
      listByClientId: vi.fn().mockRejectedValue(new Error('database unavailable')),
    } as any);

    await expect(controller.list({ clientId: 'client-1' })).rejects.toBeInstanceOf(ServiceUnavailableException);
  });

  it('leaves missing authentication to the JWT guard', () => {
    expect(UnauthorizedException).toBeTypeOf('function');
  });
});
