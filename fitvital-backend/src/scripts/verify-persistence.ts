import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module.js';
import { randomUUID } from 'crypto';
import { SCHEDULING_REPOSITORY } from '../modules/scheduling/repositories/scheduling.repository.interface.js';
import { Scheduling } from '../modules/scheduling/entities/scheduling.entity.js';
import { SchedulingStatus } from '../common/enum/scheduling-status.enum.js';

async function bootstrap() {
  console.log('Connecting to the database...');
  const app = await NestFactory.createApplicationContext(AppModule);
  
  const repository = app.get(SCHEDULING_REPOSITORY);
  const id = randomUUID();

  try {
    console.log(`\n1. Creating a new scheduling with ID: ${id}`);
    
    const newScheduling = new Scheduling(
      id,
      randomUUID(), 
      SchedulingStatus.PENDING, 
      new Date(),
      new Date()
    );

    console.log('2. Saving to the database...');
    await repository.save(newScheduling);
    console.log('   Saved successfully!');

    console.log('\n3. Fetching from the database to confirm...');
    const foundScheduling = await repository.findById(id);
    
    if (foundScheduling) {
      console.log('   Found! ID:', foundScheduling.schedulingId);
    } else {
      console.log('   Error: Not found in the database.');
    }

  } catch (error) {
    console.error('Persistence test error:', error);
  } finally {
    await app.close();
    console.log('\nConnection closed.');
  }
}

bootstrap();