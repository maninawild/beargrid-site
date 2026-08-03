const productionOrigin = "https://beargridsolutions.com";
const endpoint = "https://api.indexnow.org/indexnow";
const key = process.env.INDEXNOW_KEY?.trim() ?? "";
const paths = process.argv.slice(2);
const keyPattern = /^[A-Za-z0-9-]{8,128}$/;

if (!keyPattern.test(key)) {
  throw new Error("INDEXNOW_KEY must contain 8–128 letters, numbers or hyphens.");
}

if (paths.length === 0) {
  throw new Error("Pass at least one updated canonical path, for example: npm run indexnow -- / /expertise");
}

const urlList = [...new Set(paths.map((path) => {
  const url = new URL(path, productionOrigin);
  if (url.origin !== productionOrigin) {
    throw new Error(`Only ${productionOrigin} URLs may be submitted: ${url}`);
  }
  url.hash = "";
  url.search = "";
  return url.toString();
}))];

if (urlList.length > 10_000) {
  throw new Error("IndexNow accepts at most 10,000 URLs per request.");
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "beargridsolutions.com",
    key,
    keyLocation: `${productionOrigin}/indexnow-key.txt`,
    urlList,
  }),
});

if (![200, 202].includes(response.status)) {
  const body = await response.text();
  throw new Error(`IndexNow returned ${response.status}: ${body}`);
}

console.log(`IndexNow accepted ${urlList.length} canonical URL${urlList.length === 1 ? "" : "s"} (${response.status}).`);
