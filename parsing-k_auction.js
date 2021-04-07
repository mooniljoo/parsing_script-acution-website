var q = [];
var ls = document.querySelectorAll('.renewalRow > li')
ls.forEach((item, index) => {

const mainInfo = item.querySelector('.information .main');
const number = mainInfo?.querySelector('.lotNum')?.innerText || '';
const artist = mainInfo?.querySelector('.artist')?.innerText.split('(')[0] || '';
const subject = mainInfo?.querySelector('.subject')?.innerText || '';
const subjectKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(subject) ? subject : '';
const subjectEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(subject) ? subject : '';
console.log(mainInfo, number, artist, subject)

const subInfo = item.querySelector('.information .sub')
const year = subInfo?.querySelector('.year')?.innerText || '';
const material = subInfo?.querySelector('p:nth-child(2)')?.innerText || '';
const size = subInfo?.querySelector('p:nth-child(3)')?.innerText || '';
console.log(subInfo, year, material, size)

q.push({
number,
artist,
year,
subjectKr,
subjectEn,
size,
material
})


})

copy(q)
