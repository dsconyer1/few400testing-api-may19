import { Controller, Post, Body } from '@nestjs/common';
import * as cuid from 'cuid';
import { CreatePost, PostResponse } from './models';

@Controller('todos')
export class TodosController {

    @Post()
    async createATodo(@Body() newPost: CreatePost) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: cuid(),
                    description: newPost.description,
                });
            }, 3000);
        });
    }
}
