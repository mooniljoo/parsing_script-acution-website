let q = [];
let ls = document.querySelectorAll("#auctionList > li")
ls.forEach((item) => {
const number = item.querySelector('.auction_lotnum').innerText;
const artist = item.querySelector('[ng-bind="lot.ARTIST_NAME_JSON[locale]').innerText;
const birth = item.querySelector('.auction_workartist > .txt_pale ').innerText;
const title = item.querySelector('.auction_worktitle').innerText;

const titleKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';
const titleEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';

const desc = item.querySelector('.workmaterial')
const material = desc.querySelector('[ng-bind="lot.MATE_NM_EN"]')?.innerText;

const sizeEdition = item.querySelector('.edition_txt_p')?.innerText || '';
const size = sizeEdition.includes('ed.') ? sizeEdition.split(" ed.")[0] : sizeEdition ;
const edition = sizeEdition.includes('ed.') ? 'ed.'+sizeEdition.split("ed.")[1] : "";

const year = desc?.querySelector('.ng-binding')?.innerText || '';
const estimate = item?.querySelector('li.es_price_right')?.innerText.replace('\n', ' ') || '';

q.push({
number,
artist,
birth,
titleKr,
titleEn,
year,
material,
size,
edition,
estimate
})
})
copy(q)
