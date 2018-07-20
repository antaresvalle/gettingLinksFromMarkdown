(function(){

    const gettingLinksFromMarkdown = (md) => {
        let mdWithoutImg = String(md).replace(/!\[([^\[.]+?)\]\((.+?)\)/gm, '');
        //console.log(mdWithoutImg);
    
        const rgx = /!?\[([^\[.]+?)\]\((.+?)\)/gm //arroja todos los links 
    
        let hrefAndTextMd = [];
    
        let result = '';
        while (result = rgx.exec(mdWithoutImg)) {
            hrefAndTextMd.push({ //Se ingresa al array cada objeto con las propiedades href y text
                href: result[2],
                text: result[1]
            });
        }
        
        return hrefAndTextMd;
    }
    
    //exportando globalmente
    if (typeof window == 'undefined') {
        module.exports = gettingLinksFromMarkdown;
    } else {
        window.gettingLinksFromMarkdown = gettingLinksFromMarkdown;
    }
    
})();

