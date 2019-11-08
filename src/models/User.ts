import BaseModel from "./BaseModel";

export default class User extends BaseModel {
  readonly id!: number;
  email!: string;
  nick!: string;
  password?: string;
  price!: number;

  static tableName = "users";

  static jsonSchema = {
    type: "object",
    required: ["email", "nick", "price"],

    properties: {
      id: { type: "integer" },
      email: { type: "string", format: "email", maxLength: 40 },
      nick: { type: "string", minLength: 1, maxLength: 15 },
      password: { type: "string", minLength: 1, maxLength: 100 },
      price: { type: "integer", minLength: 1, maxLength: 10 }
    }
  };

  static modelPaths = [__dirname];
}
