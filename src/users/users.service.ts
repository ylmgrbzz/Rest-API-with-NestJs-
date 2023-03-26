import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: "1",
            name: "John Doe",
            age: 25
        },
        {
            id: "2",
            name: "Jane Doe",
            age: 25
        }
    ];

    findAll() {
        return this.users;
    }
}