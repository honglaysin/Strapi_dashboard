export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-d2vom675r7bs73alj6qg-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_59gq'),
      user: env('DATABASE_USERNAME', 'kohthmey'),
      password: env('DATABASE_PASSWORD', 'IJh7nGpmvSKYKkx65pyuXDUSegrKOqs0'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: { min: 0, max: 10 },
  },
});
