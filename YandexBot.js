// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       EgorSavin
// @match        https://yandex.ru/*
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==
let keywords = ['Металлоконструкции под ключ от ОЛАНД ПРОМТЕХМОНТАЖ', 'ОЛАНД ПРОМТЕХМОНТАЖ'];
let btnK = document.getElementsByClassName ("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
let links = document.links;
let keyword = keywords[getRandom(0, keywords.length)];
document.getElementById("text").value = keyword;

if(btnK !== undefined) {
    btnK.click();
}else{
for (let i=0; i<links.length; i++) {
    if (links[i].href.includes('olandptm.ru')){
        let link = links[i];
        link.click();
        console.log("Нашел строку" + links[i]);
        break;
    }
}
}
function getRandom(min,max) {
return Math.floor(Math.random()*(max-min)+min)
}
