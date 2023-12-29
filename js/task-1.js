// Get all items li.item
const categoriesList = document.querySelectorAll("ul#categories > li.item");

// Display the number of categories in the console
console.log(`Number of categories: ${categoriesList.length}`);

// Get the header (<h2> tag)
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("ul > li");

  console.log(`Category: ${categoryName}`);
  console.log(`Number of elements: ${categoryItems.length}`);
});
