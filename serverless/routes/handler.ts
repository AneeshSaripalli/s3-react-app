import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { Book } from "./protos/gen/book_pb";

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  const book: Book = new Book();
  book.setAuthor("Aneesh Saripalli");

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
      "Access-Control-Allow-Methods": "GET", // Allow only GET request
    },
    body: JSON.stringify({
      response: book.toObject(),
    }),
  };
};
