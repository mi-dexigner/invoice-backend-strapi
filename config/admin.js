module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43ca160e3f5652a0a5e63731d2aa296e'),
  },
});
