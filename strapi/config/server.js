module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e49ba534ad9193da1142ca0438b6b957'),
    },
  },
  vercel: {
    token: env('VERCEL_TOKEN'),
    projectId: env('VERCEL_PROJECT_ID'),
    triggers: {
        production: env('VERCEL_TRIGGER_PRODUCTION')
    },
}
});
