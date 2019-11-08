import BaseModel from "./BaseModel";
import { RelationMappings, Model } from "objection";

export default class Good extends BaseModel {
  readonly id!: number;
  name!: string;
  img?: string;
  price!: number;

  static tableName = "goods";

  static jsonSchema = {
    type: "object",
    required: ["name", "price"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 40 },
      img: { type: "string", minLength: 1, maxLength: 200 },
      price: { type: "integer", minLength: 1, maxLength: 10 }
    }
  };

  static relationMappings: RelationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: "User",
      join: {
        from: "goods.userId",
        to: "users.id"
      }
    }
  };

  static modelPaths = [__dirname];
}
