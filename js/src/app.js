const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;


const gettingLinksFromMarkdown = (md) => {
    const rgx = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
    let matchRgxAndMd = md.match(rgx);//Retorna array con texto y href 

    console.log(matchRgxAndMd);

    let hrefAndTextMd = [];

    for(var i = 0; i < matchRgxAndMd.length; i++) {
        hrefAndTextMd.push({ //Se ingresa al array cada objeto con las propiedades href y text
            href: matchRgxAndMd[i + 1],
            text: matchRgxAndMd[i].slice(1,-1)
        });
        i++;
    }
    console.log(hrefAndTextMd); //Devuelve el array de objetos (links)
}

gettingLinksFromMarkdown(str);