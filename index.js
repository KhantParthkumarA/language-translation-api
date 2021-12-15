const UserAgent = require("user-agents");
const cheerio = require("cheerio");
const app = require('express')();
const axios = require('axios');

const { replaceBoth } = require("./language");
const apiBaseUrl = 'https://translate.google.com'

const googleScrape = async (source, target, query) => {
    const parsed = replaceBoth("mapping", { source, target });
    let res = await axios(`${apiBaseUrl}/m?sl=${parsed.source}&tl=${parsed.target}&q=${encodeURIComponent(query)}`,
        { headers: { "User-Agent": new UserAgent().toString() } }
    )
    const html = res.data
    if (!res || res.status !== 200) {
        return { errorMsg: "An error occurred while retrieving the translation" }
    }
    const translationRes = cheerio.load(html)(".result-container").text().trim();
    return translationRes ? { translationRes } : { errorMsg: "An error occurred while parsing the translation" };
}

app.get('/translate', async (request, response) => {
    const { source, target, text } = request.query
    const data = await googleScrape(source, target, text)
    return response.status(200).send(data)
})

app.listen(3200, () => console.log('Application listning on 3200'))