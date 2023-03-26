import { Controller, Get, Param } from "@nestjs/common";

@Controller('users')
export class UsersController {
    @Get()
    getAll() {
        return "All users";
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

