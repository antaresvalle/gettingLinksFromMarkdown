# Getting links from Markdown

***

Getting links from Markdown it’s a module that receives a string in Markdown format and extracts all the links founded, returning an array of objects.

Visit the test page at [https://antaresvalle.github.io/gettingLinksFromMarkdown/](https://antaresvalle.github.io/gettingLinksFromMarkdown/) 

## Usage
Install the next command in the terminal:

```
npm install getting-links-from-markdown
```

Use the following template to implement the package:

```js
const gettingLinksFromMarkdown = require('./dist/gettingLinksFromMarkdown');

const markdownString = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

const links = gettingLinksFromMarkdown(markdownString);

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]

```


### Node
Include the following require function:

```
const gettingLinksFromMarkdown = require('./dist/gettingLinksFromMarkdown');
```

### Browser
Include it in your HTML:

```html
<script src="node_modules/getting-links-from-markdown/dist/gettingLinksFromMarkdown.js"></script>
```

### NPM package

[https://www.npmjs.com/package/getting-links-from-markdown](https://www.npmjs.com/package/getting-links-from-markdown) 


### Authors
Antares Valle & Jesica Domínguez