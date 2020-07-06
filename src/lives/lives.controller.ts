import { Controller, Get, Render } from '@nestjs/common';
import { Live } from './live.entity';
import { LivesService } from './lives.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('maratona')
export class LivesController {
  constructor(private livesService: LivesService) { }

  // @Get()
  // index(): Promise<Live[]> {
  //   return this.livesService.findAll();
  // }

  @Get('')
  @Render('live_list')
  async live_list() {
    const lives = await this.livesService.findAll();
    return { layout: false, lives }
  }

  @Post('create')
  async create(@Body() liveData: Live): Promise<any> {
    return this.livesService.create(liveData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() liveData: Live): Promise<any> {
    liveData.id = Number(id);
    console.log('Update #' + liveData.id)
    return this.livesService.update(liveData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.livesService.delete(id);
  }
}

