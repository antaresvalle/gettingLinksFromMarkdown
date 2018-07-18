'use strict';

var gettingLinksFromMarkdown = function gettingLinksFromMarkdown(md) {
    var mdWithoutImg = String(md).replace(/!\[([^\[.]+?)\]\((.+?)\)/gm, '');
    //console.log(mdWithoutImg);

    var rgx = /!?\[([^\[.]+?)\]\((.+?)\)/gm; //arroja todos los links 

    var hrefAndTextMd = [];

    while (result = rgx.exec(mdWithoutImg)) {
        hrefAndTextMd.push({ //Se ingresa al array cada objeto con las propiedades href y text
            href: result[2],
            text: result[1]
        });
    }
    console.log(hrefAndTextMd); //Devuelve el array de objetos (links)
    return JSON.stringify(hrefAndTextMd);
};

//exportando globalmente
if (typeof window == 'undefined') {
    module.exports = gettingLinksFromMarkdown;
} else {
    window.gettingLinksFromMarkdown = gettingLinksFromMarkdown;
}