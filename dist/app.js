'use strict';

var inpLinks = document.getElementById('textMD');
var btn = document.getElementById('btn');

var getMD = function getMD() {
    var textMarkdown = inpLinks.value;
    //console.log(textMarkdown);
    printLinks(textMarkdown);
};

var printLinks = function printLinks(txt) {
    var links = document.getElementById('links');
    var linksResult = gettingLinksFromMarkdown(txt);
    console.log(linksResult);
    links.innerHTML = JSON.stringify(linksResult);
};

btn.addEventListener('click', function () {
    getMD();
});