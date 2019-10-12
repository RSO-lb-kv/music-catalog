import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Song } from '../../models/entities/song.entity';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
