let q = [];
let ls = document.querySelectorAll(".prd-list > .list");
let source = document
  .querySelector("title")
  ?.innerText.replace(/[^가-힣]/g, "")
  .trim();
let auction_title = document.querySelector(".incont .text2")?.innerText;
ls.forEach((item) => {
  const number = item?.querySelector(".lotNum").innerText.split("LOT ")[1];
  const artistInfo = item?.querySelector(".writer-info");
  const artistKr = artistInfo
    ?.querySelector(".name")
    .innerText.replace(/[^가-힣]+\w/g, "");
  const artistEn = artistInfo
    ?.querySelector(".name")
    ?.querySelector(".en_name").innerText;
  const artworkInfo = artistInfo?.querySelector(".writer-info > .txt");
  const title = artworkInfo?.innerText.split("\n")[0];
  const material = artworkInfo?.innerText.split("\n")[1];
  const sizeEdition = artworkInfo?.innerText.split("\n")[2];
  const year = artworkInfo?.innerText.split("\n")[3];
  const auctionInfo = item?.querySelector(".auction-info");
  const estimate = auctionInfo
    ?.querySelectorAll("dl")[2]
    ?.querySelector("dd")?.innerHTML;

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
