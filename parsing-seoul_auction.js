let q = [];
let ls = document.querySelectorAll("#auctionList > li")
let source = document.querySelector("title").innerText
ls.forEach((item) => {
const number = item?.querySelector('.auction_lotnum > strong')?.innerText;
const artistInfo = item?.querySelector('.auction_workartist');
const artist = artistInfo?.querySelectorAll('.workartist > span')[0].innerText;
const birth = artistInfo?.querySelectorAll('.workartist > span')[1].innerText;
const title = item?.querySelector('.auction_worktitle')?.innerText;

const artistKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(artist) ? artist : '';
const artistEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(artist) ? artist : '';

const titleKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';
const titleEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';

const desc = item?.querySelector('.workmaterial')
const material = desc?.querySelector('[ng-bind="lot.MATE_NM_EN"]')?.innerText;

const sizeEdition = item?.querySelector('.edition_txt_p')?.innerText || '';

const year = desc?.querySelector('.ng-binding')?.innerText || '';
const estimate = item?.querySelector('li.es_price_right')?.innerText.replace('\n', ' ') || '';

q.push({
number,
artistKr,
artistEn,
titleKr,
titleEn,
year,
sizeEdition,
material,
estimate,
source
})
})
copy(q)
