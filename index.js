const fetch = require('node-fetch');
exports.handler = async (event) => fetch(
    `https://api.cloudflare.com/client/v4/zones/${process.env.ZONE_ID}/settings/security_level`,
    {
      body: "{\"value\": \"under_attack\"}",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Email": process.env.API_EMAIL,
        "X-Auth-Key": process.env.API_KEY
      },
      method: "PATCH"
    }
);
