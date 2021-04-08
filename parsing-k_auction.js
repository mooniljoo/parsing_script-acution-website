let q = [];
let ls = document.querySelectorAll('.list-pd')
ls.forEach((item, index) => {
    const mainInfo = item.querySelector('.card.artwork');
    const number = mainInfo?.querySelector('.lot')?.innerText.split('LOT ')[1] || '';
    const artist = mainInfo?.querySelector('.card-title')?.innerText || '';
    const title = mainInfo?.querySelector('.card-subtitle')?.innerText || '';
    const description = mainInfo?.querySelector('.description')?.innerText || '';
    const yearMaterial= description.split('\n')[0];
    const year = yearMaterial.replace(/[^0-9]/g,"").trim()
    const material = yearMaterial.replace(/[0-9]/g,"").trim()
    const sizeEdition = description.split('\n')[1];
    const estimate = mainInfo?.querySelector('.list-inline-item.font-numbers')?.innerText.replace('\n',' ') || '';

    q.push({
    number,
    artist,
    title,
    year,
    material,
    sizeEdition,
    estimate
})
})
copy(q)
