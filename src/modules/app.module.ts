import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatalogModule],
})
export class AppModule {}
