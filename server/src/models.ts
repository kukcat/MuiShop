import { PrismaClient, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export type ContextPrisma = PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>