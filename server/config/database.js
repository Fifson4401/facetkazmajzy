module.exports = ({ env }) => {
  console.log('Loading database config...');
  console.log('DATABASE_CLIENT:', env('DATABASE_CLIENT'));
  console.log('DATABASE_HOST:', env('DATABASE_HOST'));
  
  const config = {
    connection: {
      client: env('DATABASE_CLIENT', 'postgres'),
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      debug: false,
    },
  };
  
  console.log('Database config created successfully');
  return config;
};