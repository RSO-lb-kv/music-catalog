import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { VPagination } from '../../models/validation/pagination.validation';
import { VSong, VSongUpdate } from '../../models/validation/song.validation';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get()
  getAll() {
    return this.catalogService.listSongs(new VPagination());
  }

  @Post()
  createSong(@Body() song: VSong) {
    return this.catalogService.create(song);
  }

  @Put(':id')
  updateSong(
    @Body() song: VSongUpdate,
    @Param('id', new ParseIntPipe()) id: number,
  ) {
    return this.catalogService.updateById(id, song);
  }
}
