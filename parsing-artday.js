var q = [];
var ls = document.querySelectorAll("#auctionList > li")
ls.forEach((item) => {
const author = item.querySelector('.auction_list_author');


const number = author.querySelector('.auction_lotnum').innerText;
const artist = author.querySelector('.auction_workartist').innerText;
const birth = author.querySelector('.name > span').innerText;
const subject = author.querySelector('.auction_worktitle .tit').innerText;

const subjectKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(subject) ? subject : '';
const subjectEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(subject) ? subject : '';

const explain = author.querySelector('.auction_list_explain')
const material = explain.querySelector('[ng-bind="lot.MATE_NM_EN"]').innerText;
const size = explain.querySelectorAll('[ng-bind="size | size_text"]');
let sizeList = [];
size.forEach((t) => sizeList.push(t.innerText));
console.log(sizeList)
const edition = explain.querySelectorAll('[ng-bind="lot.edition"]');
const year = explain?.querySelector('[ng-if="lot.MAKE_YEAR_JSON[locale]"]')?.innerText || '';

q.push({
number,
artist,
year,
subjectKr,
subjectEn,
sizeList,
material,
edition,
})
})
copy(q)
