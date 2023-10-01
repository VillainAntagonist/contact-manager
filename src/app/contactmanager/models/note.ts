export class Note {
  id: number;
  title: string;
  date: Date;

  constructor() {
    this.id = 0;
    this.date = new Date();
    this.title = "";
  }
}
