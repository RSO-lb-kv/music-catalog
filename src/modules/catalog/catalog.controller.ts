import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';

import { DSong } from '../../models/dtos/song.dto';
import { VPagination } from '../../models/validation/pagination.validation';
import { VSong } from '../../models/validation/song.validation';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get()
  async listSongs(@Query() pagination: VPagination) {
    return (await this.catalogService.listSongs(pagination)).map(
      song => new DSong(song),
    );
  }

  @Get(':id')
  async getById(@Param('id', new ParseIntPipe()) id: number) {
    return new DSong(await this.catalogService.getById(id));
  }

  @Post()
  async create(@Body() data: VSong) {
    return new DSong(await this.catalogService.create(data));
  }
}
