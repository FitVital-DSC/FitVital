import { describe, expect, it, vi } from 'vitest';
import { EnrollmentService } from './enrollment.service.js';

describe('EnrollmentService', () => {
  it('creates an active enrollment with the first monthly payment', async () => {
    const input = {
      nome: 'Ana Silva',
      email: 'ana.silva@example.com',
      telefone: '11999999999',
      endereco: 'Rua das Flores, 100',
      cpf: '12345678901',
    };
    const studentsRepository = {
      create: vi.fn().mockResolvedValue({ studentId: 'student-1' }),
    };
    const monthlyPaymentsRepository = {
      create: vi.fn().mockResolvedValue({ monthlyPaymentId: 'payment-1' }),
    };

    const service = new EnrollmentService(
      studentsRepository,
      monthlyPaymentsRepository,
    );

    const result = await service.enrollStudent(input);

    expect(result).toEqual({
      id: expect.any(String),
      studentId: 'student-1',
      status: 'ACTIVE',
      monthlyPaymentId: 'payment-1',
    });
    expect(studentsRepository.create).toHaveBeenCalledWith(input);
    expect(monthlyPaymentsRepository.create).toHaveBeenCalledWith({
      studentId: 'student-1',
    });
  });
});
