import { PromMethodCounter } from '@digikare/nestjs-prom';
import { Controller, Get } from '@nestjs/common';

import { VPagination } from '../../models/validation/pagination.validation';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(
    private catalogService: CatalogService,
  ) //@InjectCounterMetric('catalog-list') private counterMetric: CounterMetric,
  {}

  @Get()
  @PromMethodCounter()
  getAll() {
    //this.counterMetric.inc();
    return this.catalogService.listSongs(new VPagination());
  }
}
