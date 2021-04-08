var q = [];
var ls = document.querySelectorAll('.list-pd')
ls.forEach((item, index) => {
    const mainInfo = item.querySelector('.card.artwork');
    const number = mainInfo?.querySelector('.lot')?.innerText || '';
    const artist = mainInfo?.querySelector('.card-title')?.innerText || '';
    const title = mainInfo?.querySelector('.card-subtitle')?.innerText || '';
    const description = mainInfo?.querySelector('.description')?.innerText || '';
    const material= description.split('\n')[0];
    const sizeEdition = description.split('\n')[1];
    const size = sizeEdition.includes('(e') ? sizeEdition.split(" (e")[0] : sizeEdition ;
    const edition = sizeEdition.includes('(e') ? '(e'+sizeEdition.split("(e")[1] : "";
    const estimate = mainInfo?.querySelector('.list-inline-item.font-numbers')?.innerText.replace('\n',' ') || '';

    q.push({
    number,
    artist,
    title,
    material,
    size,
    edition,
    estimate
})
})
copy(q)