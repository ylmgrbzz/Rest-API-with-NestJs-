import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);


