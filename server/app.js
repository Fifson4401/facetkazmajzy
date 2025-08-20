//const strapi = require('@strapi/strapi');

// Tworzymy instancję Strapi.
// Opcja { distDir: './dist' } wskazuje, gdzie znajduje się zbudowana aplikacja produkcyjna.
//const app = strapi({ distDir: './dist' });

// Uruchamiamy serwer Strapi.
//app.start();

const strapi = require('@strapi/strapi');
const app = strapi.createStrapi({ distDir: './dist' });
app.start(); 