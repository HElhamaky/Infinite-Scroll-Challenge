const fetch = require("node-fetch");

const handler = async function (event, context) {
  const page = `page=${event.queryStringParameters.page}`;
  const per_page = `per_page=${event.queryStringParameters.per_page}`;
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?${page}&${per_page}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data }),
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
