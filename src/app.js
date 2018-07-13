// import {gettingLinksFromMarkdown} from './gettingLinksFromMarkdown'

let inpLinks = document.getElementById('textMD'); 
let btn = document.getElementById('btn');


console.log(inpLinks);
console.log(btn);

const getMD = () => {
   let textMarkdown = inpLinks.value;
//    console.log(textMarkdown);
   printLinks(textMarkdown);
}

const gettingLinksFromMarkdown = (md) => {
    const rgx = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
    let matchRgxAndMd = md.match(rgx);//Retorna array con texto y href 

    // console.log(matchRgxAndMd);

    let hrefAndTextMd = [];

    for(let i = 0; i < matchRgxAndMd.length; i++) {
        hrefAndTextMd.push({ //Se ingresa al array cada objeto con las propiedades href y text
            href: matchRgxAndMd[i + 1],
            text: matchRgxAndMd[i].slice(1,-1)
        });
        i++;
    }
    console.log(hrefAndTextMd); //Devuelve el array de objetos (links)

    return JSON.stringify(hrefAndTextMd);
}

const printLinks = (txt) => {
    let links = document.getElementById('links');
    let linksResult = gettingLinksFromMarkdown(txt);
    console.log(linksResult);
    links.innerHTML = linksResult;
    
}

btn.addEventListener('click', () =>{
    getMD();
});




