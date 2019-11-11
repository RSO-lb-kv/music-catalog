import { ConsulConfig, InjectConfig } from '@nestcloud/config';
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Song } from '../../models/entities/song.entity';
import { VPagination } from '../../models/validation/pagination.validation';
import { VSong } from '../../models/validation/song.validation';

@Injectable()
export class CatalogService implements OnModuleInit{
  constructor(
    @InjectRepository(Song) private songRepo: Repository<Song>,
    @InjectConfig() private config: ConsulConfig
  ) {}

  onModuleInit() {
    /* CONSUL TEST EXAMPLE */
    console.log(this.config.get());
    this.config.watch('test', console.log)
  }

  async listSongs({ page, perPage }: VPagination) {
    return await this.songRepo.find({
      order: { id: 'ASC' },
      skip: (page - 1) * perPage,
      take: perPage,
    });
  }

  async getById(id: number) {
    const song = await this.songRepo.findOne({ id });
    if (!song) throw new NotFoundException(`Song with id ${id} not found!`);
    return song;
  }

  async create(song: VSong) {
    const entity = new Song();
    entity.title = song.title;
    entity.description = song.description;
    entity.lengthInSeconds = 213;
    entity.uri = '';

    return await this.songRepo.save(entity);
  }
}
