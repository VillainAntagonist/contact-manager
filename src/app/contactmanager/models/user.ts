import {Note} from "./note";

export class User {
  id: number;
  birthDay: Date;
  name: string;
  avatar: string;
  bio:string
  notes: Note[] = []
  constructor() {
    this.id = 0;
    this.birthDay = new Date();
    this.name = "";
    this.avatar = "";
    this.bio = "";
  }
}
