import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import {
  IndexColumn,
  PgTableFn,
  index,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const buildMessageTableCreator = ({
  tableCreator,
}: {
  tableCreator: PgTableFn;
}) => {
  const create = (schemaName: string) =>
    tableCreator(
      schemaName,
      {
        id: varchar("id", { length: 128 })
          .$defaultFn(() => createId())
          .primaryKey(),
        referenceId: varchar("reference_id", { length: 128 }).$defaultFn(() =>
          createId(),
        ),
        htmlContent: text("html_content"),
        timestamp: timestamp("timestamp")
          .default(sql`CURRENT_TIMESTAMP`)
          .notNull(),
      },
      (message_schema: { referenceId: IndexColumn }) => ({
        referenceIdIndex: index("reference_id_idx").on(
          message_schema.referenceId,
        ),
      }),
    );
  return { create };
};

export { buildMessageTableCreator };
