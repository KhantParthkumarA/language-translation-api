const UserAgent = require("user-agents");
const cheerio = require("cheerio");
const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/translate', async (req, res, next) => {
    let { source, target } = req.query
    const text = req.body.txt
    source = source ? source : 'pt'
    target = target ? target : 'en'
    const data = await googleScrape(source, target, text)
    return res.status(200).send(data)
})

app.use("/", router);

app.listen(process.env.PORT || 3200, () => console.log('Application listning on 3200'))