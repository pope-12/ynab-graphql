import { Module } from '@nestjs/common';
import { YnabApiService } from './ynab-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [YnabApiService],
  exports: [YnabApiService]
})
export class YnabApiModule {}
