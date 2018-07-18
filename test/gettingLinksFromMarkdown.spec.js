const assert = require('assert');
const gettingLinksFromMarkdown = require('../src/gettingLinksFromMarkdown');

describe('Testing getting links from markdown', () => {
    it('Debería devolver [{href:"http://enlace.com", text:"este enlace"}]', () => {
        assert.deepEqual(
            gettingLinksFromMarkdown('el texto de [este enlace](http://enlace.com) aquí hay más texto(este parentesís puede provocar que truene la expresión regular)'),
            [{href:"http://enlace.com", text:"este enlace"}]
        );
    });

    it('Debería devolver [{href:"local.md", text:"enlaces locales"}]', () => {
                     
        assert.deepEqual(
            gettingLinksFromMarkdown('Aquí hay [enlaces locales](local.md)'), 
            [{href:"local.md", text:"enlaces locales"}]
        );
    });

    it('Debería devolver  un array de objetos con el contenido correcto', () => {

        assert.deepEqual(gettingLinksFromMarkdown(`# Lorem ipsum

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
        [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
        
        [foo](http://foo.com)
        
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`),
            [{ href: "https://en.wiktionary.org/wiki/labore", text: "labore" },
            { href: "https://en.wiktionary.org/wiki/dolore", text: "dolore" },
            { href: "http://foo.com", text: "foo" }]
        );
        
    });
});