import {
  pgTableCreator
} from "drizzle-orm/pg-core";
import { buildMessageTableCreator } from "./drizzle/message-schema";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `reljodoreta_${name}`);
export const invitationMessage = buildMessageTableCreator({ tableCreator: createTable }).create('invitation_message');


