import { Realm } from "@realm/react"

export class Task extends Realm.Object<Task, "description"> {
  _id!: Realm.BSON.ObjectId;
  createdAt!: Date;
  description!: string;
  isComplete!: boolean;
  ownerId!: string;

  constructor(realm: Realm, description: string, ownerId?: string) {
    super(realm, {
      _id: new Realm.BSON.ObjectId(),
      description: description,
      ownerId: ownerId ? ownerId : '_SYNC_DISABLED_',
      createdAt: new Date()
    })
  }

  static schema: Realm.ObjectSchema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      createdAt: { type: "date" },
      description: { type: "string" },
      isComplete: { type: "bool", default: false },
      ownerId: { type: 'string' },
    },
    primaryKey: '_id',
  };
}