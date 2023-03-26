import { Injectable, remove } from '@nestjs/common';
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

    async getAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async getOne(id): Promise<User> {
        return await this.userModel.findById(id);
    }


    async create(userDto): Promise<User> {
        const user = new this.userModel(userDto);
        return await user.save();
    }

    async update(id, userDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    }

    async remove(id): Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    }




}