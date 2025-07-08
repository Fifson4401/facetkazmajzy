module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'pgsql62.mydevil.net',
      port: 5432,
      database: 'p1176_facetkadb',
      user: 'p1176_facetkadb',
      password: '~mYza5R3RT1m1fE8jAbtc^C2#11b1W', // <--- WAŻNE!
      ssl: false,
    },
    debug: false,
  },
});