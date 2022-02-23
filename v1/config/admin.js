module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62fa9a8c12dbc8e74b4d0c4f24752747'),
  },
});
