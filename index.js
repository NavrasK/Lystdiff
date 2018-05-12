const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: 'https://www.bagoum.com/db/A4V',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(($) => {
        console.log($);
        $('#DB-cardListCont').each(function(i, elem) {
            console.log($(this).text());
        });
    })
    .catch((err) => {console.log(err);})
