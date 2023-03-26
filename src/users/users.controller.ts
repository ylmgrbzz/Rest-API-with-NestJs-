import {
    Controller, Get, Param, Put, Delete
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { Post, Body, } from "@nestjs/common";
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get()
    getAll() {
        return this.usersService.getAll();
    }
    @Get(":id")
    getOne(@Param('id') id) {
        return this.usersService.getOne(id);

        @Post()
        create(@Body() userDto: CreateUsersDto) {
            return this.usersService.create(userDto);
        }

        @Put(":id")
        update(@Body() id, @Body() userDto: CreateUsersDto) {
            return this.usersService.update(id, userDto);
        }

        @Delete(":id")
        remove(@Param('id') id) {
            return this.usersService.remove(id);
        }

    }

