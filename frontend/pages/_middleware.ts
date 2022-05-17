import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default function middleware(req: NextApiRequest) {
  // Store the response so we can modify its headers
  const response = NextResponse.next();
  const { accessToken } = req.cookies;

  req.headers.authorization = `Bearer ${accessToken}`;
  // Set custom header
  response.headers.set("x-modified-edge", "true");
  // response.headers.set("authorization", `Bearer ${accessToken}`);
  // console.log(req.headers.authorization);
  console.log(req.url);

  // Return response
  return response;
}
