const { exceptions, mappings } = require("./languages.json");
const checkTypes = { exception: exceptions, mapping: mappings };
const langTypes = ["source", "target"];
const isKeyOf = (obj) => (key) => key in obj;

const replaceBoth = (checkType, langs) => {
    const [source, target] = langTypes.map(langType => {
        const object = checkTypes[checkType][langType];
        const langCode = langs[langType];
        return isKeyOf(object)(langCode) ? object[langCode] : langCode;
    });
    return { source, target };
}

module.exports = {
    replaceBoth
}