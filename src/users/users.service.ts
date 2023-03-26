import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/common";
import { User, UserDocument } from "./schemas/users.schema";
import { Model } from "mongoose";
@Injectable()
export class UsersService {
    // private readonly users = [
    //     {
    //         id: "1",
    //         name: "John Doe",
    //         age: 25
    //     },
    //     {
    //         id: "2",
    //         name: "Jane Doe",
    //         age: 25
    //     }
    // ];
    constructors(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findAll() {
        return await this.userModel.find();
    }

    async create(userDto) {
        const user = new this.userModel(userDto);
        return await user.save();
    }

    async update(id, userDto) {
        return await this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    }


}