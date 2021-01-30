import * as jspb from 'google-protobuf'



export class Another extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): Another;

  getTitle(): string;
  setTitle(value: string): Another;

  getAuthor(): string;
  setAuthor(value: string): Another;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Another.AsObject;
  static toObject(includeInstance: boolean, msg: Another): Another.AsObject;
  static serializeBinaryToWriter(message: Another, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Another;
  static deserializeBinaryFromReader(message: Another, reader: jspb.BinaryReader): Another;
}

export namespace Another {
  export type AsObject = {
    isbn: number,
    title: string,
    author: string,
  }
}

