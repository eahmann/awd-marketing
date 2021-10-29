module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "localhost"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      username: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "strapi"),
      schema: env("DATABASE_SCHEMA", "public"), // Not Required
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
