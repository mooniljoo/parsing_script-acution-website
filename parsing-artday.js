var q = [];
var ls = document.querySelectorAll(".auction-table > tbody > tr")
ls.forEach((item) => {


const number = item.querySelectorAll('td')[0].innerText;
const artist = item.querySelectorAll('td')[2].querySelectorAll('p')[0].innerText;
const birth = item.querySelectorAll('td')[2].querySelectorAll('p')[2].innerText;
const title = item.querySelectorAll('td')[3].querySelectorAll('p')[0].innerText;
const size = item.querySelectorAll('td')[3].querySelectorAll('p')[1].innerText;
const material = item.querySelectorAll('td')[3].querySelectorAll('p')[2].innerText;
const year = item.querySelectorAll('td')[3].querySelectorAll('p')[3].innerText;

const titleKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';
const titleEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';

q.push({
number,
artist,
year,
titleKr,
titleEn,
size,
material,
})
})
copy(q)
