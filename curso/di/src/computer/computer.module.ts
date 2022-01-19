import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
