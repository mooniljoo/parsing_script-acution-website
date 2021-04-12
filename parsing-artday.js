let q = [];
let ls = document.querySelectorAll(".auction-table > tbody > tr");
let source = document.querySelector("title")?.innerText;
let auction_title = document.querySelector('.auc-top-title')?.innerText;
ls.forEach((item) => {

    const number = item?.querySelectorAll('td')[0]?.innerText;
    const artist = item?.querySelectorAll('td')[2]?.querySelectorAll('p')[0]?.innerText;
    const birth = item?.querySelectorAll('td')[2]?.querySelectorAll('p')[2]?.innerText;
    const title = item?.querySelectorAll('td')[3]?.querySelectorAll('p')[0]?.innerText;
    const size = item?.querySelectorAll('td')[3]?.querySelectorAll('p')[1]?.innerText;
    const materialEdition = item?.querySelectorAll('td')[3]?.querySelectorAll('p')[2]?.innerText;
    const material = materialEdition?.split("(")[0]
    const edition = materialEdition?.split("(")[1] ? " (" +materialEdition?.split("(")[1] : '';
    const sizeEdition  = size + edition
    const year = item?.querySelectorAll('td')[3]?.querySelectorAll('p')[3]?.innerText;
    const estimate = item?.querySelectorAll('td')[5]?.querySelectorAll('p')[0]?.innerText.replaceAll("\n"," ");
    const transactTime = item?.querySelectorAll('td')[6]?.querySelectorAll('p')[0]?.innerText.replaceAll("\n"," ");

    const artistKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(artist) ? artist : '';
    const artistEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(artist) ? artist : '';

    const titleKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';
    const titleEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : '';

    const materialKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(material) ? material : '';
    const materialEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(material) ? material : '';

    q.push({
    number,
    artistKr,
    artistEn,
    titleKr,
    titleEn,
    year,
    sizeEdition,
    materialKr,
    materialEn,
    estimate,
    source,
    auction_title,
})
})
copy(q)
