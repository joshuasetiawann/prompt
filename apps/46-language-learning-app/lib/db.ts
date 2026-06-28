import { PrismaClient } from "../generated/prisma-client";
import { createPrisma } from "@scaffold/engine/server";

export const db = createPrisma(PrismaClient);
