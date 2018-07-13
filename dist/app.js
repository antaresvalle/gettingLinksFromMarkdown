"use strict";

var str = "# Lorem ipsum\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\nincididunt ut [labore](https://en.wiktionary.org/wiki/labore) et\n[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim\nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat.\n\n[foo](http://foo.com)\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\nfugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum.";

var gettingLinksFromMarkdown = function gettingLinksFromMarkdown(md) {
    var rgx = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
    var matchRgxAndMd = md.match(rgx); //Retorna array con texto y href 

    console.log(matchRgxAndMd);

    var hrefAndTextMd = [];

    for (var i = 0; i < matchRgxAndMd.length; i++) {
        hrefAndTextMd.push({ //Se ingresa al array cada objeto con las propiedades href y text
            href: matchRgxAndMd[i + 1],
            text: matchRgxAndMd[i].slice(1, -1)
        });
        i++;
    }
    console.log(hrefAndTextMd); //Devuelve el array de objetos (links)
};

gettingLinksFromMarkdown(str);