import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() query) {
    const { offset, limit } = query;
    return `coffees: pagination ${offset} ${limit}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `coffee ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `update ${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `delete ${id}`;
  }
}
