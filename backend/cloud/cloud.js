// cloud/cloud.js

// *** Middleware CORS ***
Parse.Cloud.define("setCorsHeaders", (request) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "https://git-lab-replit.vercel.app/",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Parse-Application-Id, X-Parse-REST-API-Key, X-Parse-Session-Token",
    },
  };
});


// *** Importando funções do Cloud Code ***
require("./autenticacao");

