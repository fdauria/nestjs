/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService = new MessagesService();

    @Get('/')
    listMessages(): any {
        return this.messagesService.findAll();
    }

    @Post('/')
    createMessage(@Body() body: CreateMessageDto): any {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string): any {
        return this.messagesService.findOne(id);

    }
}
 