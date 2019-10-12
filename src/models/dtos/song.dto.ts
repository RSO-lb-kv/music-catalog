import { Song } from '../entities/song.entity';

export class DSong {
  id: number;
  title: string;
  description: string;
  lengthInSeconds: number;
  uri: string;
  created: Date;

  constructor(entity: Song) {
    this.id = entity.id;
    this.title = entity.title;
    this.description = entity.description;
    this.lengthInSeconds = entity.lengthInSeconds;
    this.uri = entity.uri;
    this.created = entity.created;
  }
}
