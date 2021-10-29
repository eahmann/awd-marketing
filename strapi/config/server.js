module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
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
