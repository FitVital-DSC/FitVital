import { IsUUID } from 'class-validator';

export class CreateSchedulingDto {
  @IsUUID()
  clientId: string;
}