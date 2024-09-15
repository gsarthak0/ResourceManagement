import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://kgarbage_owner:HLvfOZXRA1E5@ep-wild-bread-a1n9lnte.ap-southeast-1.aws.neon.tech/kgarbage?sslmode=require"
);
export const db = drizzle(sql, { schema });
