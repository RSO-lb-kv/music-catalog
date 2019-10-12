import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { Song } from '../../models/entities/song.entity';
import { VPagination } from '../../models/validation/pagination.validation';
import { VSong } from '../../models/validation/song.validation';
import { CatalogService } from './catalog.service';

const pubSub = new PubSub();

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

  @Mutation(returns => Song)
  async createSong(@Args('data') data: VSong) {
    //TODO: use separate MS for uploading songs
    const song = await this.catalogService.create(data);
    pubSub.publish('songCreated', { songCreated: song });
    return song;
  }

  @Subscription(returns => Song)
  songCreated() {
    return pubSub.asyncIterator('songCreated');
  }
}
