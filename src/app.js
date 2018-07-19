let inpLinks = document.getElementById('textMD');
let btn = document.getElementById('btn');

const getMD = () => {
    let textMarkdown = inpLinks.value;
    //console.log(textMarkdown);
    printLinks(textMarkdown);
}

const printLinks = (txt) => {
    let links = document.getElementById('links');
    let linksResult = gettingLinksFromMarkdown(txt);
    console.log(linksResult);
    links.innerHTML = JSON.stringify(linksResult);
}

btn.addEventListener('click', () => {
    getMD();
});




