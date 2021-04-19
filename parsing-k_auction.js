let q = [];
let ls = document.querySelectorAll(".list-pd");
let source = document.querySelector("title")?.innerText;
let auction_title = document.querySelector('.subtop-desc > h1')?.innerText;
ls.forEach((item, index) => {
  const mainInfo = item.querySelector(".card.artwork");
  const number =
    mainInfo?.querySelector(".lot")?.innerText.split("LOT ")[1] || "";
  const artist = mainInfo?.querySelector(".card-title")?.innerText || "";
  const title = mainInfo?.querySelector(".card-subtitle")?.innerText || "";
  const description = mainInfo?.querySelector(".description")?.innerText || "";
  const material = description.split("\n")[0];
  const sizeEditionYear = description.split("\n")[1];
  const sizeEdition = sizeEditionYear.split(" |")[0];
  const year = sizeEditionYear.split("| ")[1];
  const estimate =
    mainInfo
      ?.querySelector(".list-inline-item.font-numbers")
      ?.innerText.replace("\n", " ") || "";

  const artistKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(artist) ? artist : "";
  const artistEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(artist) ? artist : "";

  const titleKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : "";
  const titleEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(title) ? title : "";

  const materialKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(material) ? material : "";
  const materialEn = !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(material) ? material : "";

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
  });
});
copy(q);
