import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/task')
export class TaskController {
  @Get()
  getHello(): string {
    return { hola: "Hola a todos"}
  }
}
