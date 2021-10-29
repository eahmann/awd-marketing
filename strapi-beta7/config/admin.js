module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e49ba534ad9193da1142ca0438b6b957'),
  },
});
