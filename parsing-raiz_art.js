var q = [];
var ls = document.querySelectorAll(".prd-list > .list")
ls.forEach((item) => {


const number = item.querySelector('.lotNum').innerText.split('LOT ')[1];
const artistInfo = item.querySelector('.writer-info');
const artistKr = artistInfo.querySelector('.name').innerText.replace(/[^가-힣]+\w/g,"");
const birth = artistInfo.querySelector('.name').querySelector('.year_info').innerText;
const artistEn = artistInfo.querySelector('.name').querySelector('.en_name').innerText;
const artworkInfo = artistInfo.querySelector('.txt');
const title = artworkInfo.innerText.split('\n')[0];
const material = artworkInfo.innerText.split('\n')[1];
const size = artworkInfo.innerText.split('\n')[2];
const year = artworkInfo.innerText.split('\n')[3];

const titleKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';
const titleEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';

q.push({
number,
artistKr,
titleKr,
titleEn,
year,
size,
material,
})
})
copy(q)
