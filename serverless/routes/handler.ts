import { APIGatewayProxyHandler } from "aws-lambda";
import { BinaryReader, BinaryWriter } from "google-protobuf";
import "source-map-support/register";
import { Book } from "./protos/gen/book_pb";

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  const book: Book = new Book();
  book.setAuthor("Aneesh Saripalli");

  const writer = new BinaryWriter();
  Book.serializeBinaryToWriter(book, writer);

  const reader = new BinaryReader();
  const new_book = new Book();
  Book.deserializeBinaryFromReader(new_book, reader);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
      "Access-Control-Allow-Methods": "GET", // Allow only GET request
    },
    body: JSON.stringify({
      response: book.toObject(),
      message: writer.getResultBase64String(),
      decode: new_book.toObject(),
    }),
  };
};
