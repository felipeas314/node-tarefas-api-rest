export class ResponseDTO<E> {
  
  private status: String;

  private message: String;

  private date: Date;

  private content: E;

  constructor(status: string,message: string,content: E){
    this.status = status;
    this.message = message;
    this.date = new Date();
    this.content = content;
  }
}