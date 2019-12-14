import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Song } from '../../models/entities/song.entity';
import { CatalogController } from './catalog.controller';
import { CatalogResolver } from './catalog.resolver';
import { CatalogService } from './catalog.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Song]),
    /*     PromModule.forMetrics([
      {
        type: MetricType.Counter,
        configuration: {
          name: 'catalog-list',
          help: 'number of calls to the /catalog endpoint',
        },
      },
    ]), */
  ],
  providers: [CatalogService, CatalogResolver],
  controllers: [CatalogController],
})
export class CatalogModule {}
