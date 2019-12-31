import { Args, Query, Resolver } from '@nestjs/graphql';

import { Song } from '../../models/entities/song.entity';
import { VPagination } from '../../models/validation/pagination.validation';
import { CatalogService } from './catalog.service';

@Resolver(of => Song)
export class CatalogResolver {
  constructor(private catalogService: CatalogService) {}

  @Query(returns => Song)
  async song(@Args('id') id: number): Promise<Song> {
    return await this.catalogService.getById(id);
  }

  @Query(returns => [Song])
  async songs(@Args() pagination: VPagination): Promise<Song[]> {
    return await this.catalogService.listSongs(pagination);
  }
}
