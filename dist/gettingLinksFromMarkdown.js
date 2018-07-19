'use strict';

var gettingLinksFromMarkdown = function gettingLinksFromMarkdown(md) {
    var mdWithoutImg = String(md).replace(/!\[([^\[.]+?)\]\((.+?)\)/gm, '');
    //console.log(mdWithoutImg);

    var rgx = /!?\[([^\[.]+?)\]\((.+?)\)/gm; //arroja todos los links 

    var hrefAndTextMd = [];

    var result = '';
    while (result = rgx.exec(mdWithoutImg)) {
        hrefAndTextMd.push({ //Se ingresa al array cada objeto con las propiedades href y text
            href: result[2],
            text: result[1]
        });
    }

    return hrefAndTextMd;
};

//exportando globalmente
if (typeof window == 'undefined') {
    module.exports = gettingLinksFromMarkdown;
} else {
    window.gettingLinksFromMarkdown = gettingLinksFromMarkdown;
}