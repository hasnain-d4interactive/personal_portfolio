import "server-only";

import { Pool, type QueryResultRow } from "pg";

declare global {
  var __portfolioPgPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  return new Pool({
    connectionString,
    max: 3,
  });
}

export function getDatabasePool() {
  if (global.__portfolioPgPool !== undefined) {
    return global.__portfolioPgPool;
  }

  const pool = createPool();

  if (pool) {
    global.__portfolioPgPool = pool;
  }

  return pool;
}

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export async function queryDatabase<T extends QueryResultRow>(
  text: string,
  params: unknown[] = [],
) {
  const pool = getDatabasePool();

  if (!pool) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return pool.query<T>(text, params);
}
