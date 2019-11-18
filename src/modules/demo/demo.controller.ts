import { Controller, Get } from '@nestjs/common';

@Controller('demo')
export class DemoController {
  @Get('info')
  projectInfo() {
    return {
      clani: ['lb5480', 'kv8904'],
      opis_projekta: 'Projekt implementira aplikacijo za deljenje glasbe.',
      mikrostoritve: [
        'http://157.230.124.197:3000/v1/catalog',
        'http://46.101.213.29:3000/v1/comment/1',
      ],
      github: [
        'https://github.com/RSO-lb-kv/music-catalog-ms',
        'https://github.com/RSO-lb-kv/song-upload-ms',
        'https://github.com/RSO-lb-kv/comments-ms',
      ],
      travis: [
        'https://travis-ci.org/RSO-lb-kv/music-catalog-ms',
        'https://travis-ci.org/RSO-lb-kv/song-upload-ms',
        'https://travis-ci.org/RSO-lb-kv/comments-ms',
      ],
      dockerhub: [
        'https://hub.docker.com/repository/docker/lbracun/music-catalog-ms',
        'https://hub.docker.com/repository/docker/lbracun/song-upload',
        'https://hub.docker.com/repository/docker/klavdijav/comments-ms',
      ],
    };
  }
}
