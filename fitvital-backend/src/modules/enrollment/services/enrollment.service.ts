export type CreateStudentInput = {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cpf: string;
};

export type StudentRecord = {
  studentId: string;
};

export type MonthlyPaymentRecord = {
  monthlyPaymentId: string;
};

export type EnrollmentResult = {
  id: string;
  studentId: string;
  status: 'ACTIVE';
  monthlyPaymentId: string;
};

export interface StudentsRepository {
  create(input: CreateStudentInput): Promise<StudentRecord>;
}

export interface MonthlyPaymentsRepository {
  create(input: {
    studentId: string;
  }): Promise<MonthlyPaymentRecord>;
}

export class EnrollmentService {
  public constructor(
    private readonly studentsRepository: StudentsRepository,
    private readonly monthlyPaymentsRepository: MonthlyPaymentsRepository,
  ) {}

  public async enrollStudent(
    input: CreateStudentInput,
  ): Promise<EnrollmentResult> {
    void this.studentsRepository;
    void this.monthlyPaymentsRepository;
    void input;

    throw new Error('EnrollmentService.enrollStudent is not implemented');
  }
}
