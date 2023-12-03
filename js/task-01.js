const categoriesList = document.getElementById("categories");
 const categoryItems = categoriesList.querySelectorAll(".item");
 console.log(`Total categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryItemsCount = categoryItem.querySelectorAll("ul > li").length;

   console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsCount}`);
 });