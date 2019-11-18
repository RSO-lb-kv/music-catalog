import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Song } from '../../models/entities/song.entity';
import { CatalogResolver } from './catalog.resolver';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  providers: [CatalogService, CatalogResolver],
  controllers: [CatalogController],
})
export class CatalogModule {}
