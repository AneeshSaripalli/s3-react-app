import * as jspb from 'google-protobuf'



export class Book extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getAuthor(): string;
  setAuthor(value: string): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    isbn: number,
    title: string,
    author: string,
  }
}

