import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Song } from '../../models/entities/song.entity';
import { CatalogResolver } from './catalog.resolver';
import { CatalogService } from './catalog.service';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  providers: [CatalogService, CatalogResolver],
})
export class CatalogModule {}
