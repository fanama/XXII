import { NextResponse } from "next/server";

export default function middleware() {
  // Store the response so we can modify its headers
  const response = NextResponse.next();
  console.log("middleware");
  // Set custom header
  response.headers.set("x-modified-edge", "true");

  // Return response
  return response;
}
