import { Controller, Get } from '@nestjs/common';

import { VPagination } from '../../models/validation/pagination.validation';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get()
  getAll() {
    return this.catalogService.listSongs(new VPagination());
  }
}
