import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}

export function createContext(req: any) {
  return {
    ...req.req,
    prisma,
    headers: req?.req?.headers || parseRawHeaders(req?.req?.rawHeaders)
  }
}

function parseRawHeaders(rawHeaders: string[]) {
  const headers = {};
  for (let i = 0; i < rawHeaders?.length; i += 2) {
      headers[rawHeaders[i].toLowerCase()] = rawHeaders[i + 1];
  }
  return headers;
}