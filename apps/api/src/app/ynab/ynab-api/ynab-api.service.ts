import { Injectable } from '@nestjs/common';
import { API } from 'ynab';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class YnabApiService {
  public readonly instance: API;

  constructor(private readonly configService: ConfigService) {
    this.instance = new API(this.configService.get('YNAB_ACCESS_TOKEN'));
  }
}
