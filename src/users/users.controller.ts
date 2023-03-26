import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { Post, Body } from "@nestjs/common";
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get()
    getAll() {
        return this.usersService.findAll();
    }
    @Get(":id")
    getOne(@Param('id') id) {
        return `User ${id}`;
    }

    @Post()
    create(@Body() userDto: CreateUsersDto) {
        return `Creating a user ${userDto.name}`
    }
}

