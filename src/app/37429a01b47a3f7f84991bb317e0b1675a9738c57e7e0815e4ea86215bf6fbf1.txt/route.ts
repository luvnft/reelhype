import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    const content = '37429a01b47a3f7f84991bb317e0b1675a9738c57e7e0815e4ea86215bf6fbf1';
  
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  