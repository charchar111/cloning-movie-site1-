const rightFilter = document.querySelector(".right__filter");
console.dir(rightFilter);

const filterItem1 = rightFilter.children[0].querySelector("button");
const filterItem2 = rightFilter.children[1].querySelector("button");

console.dir(filterItem1);
console.dir(filterItem2);

function filterButton1() {
  console.dir(filterItem1);
}

function filterButton2() {
  console.dir(filterItem2);
}

filterItem1.addEventListener("click", filterButton1);
filterItem2.addEventListener("click", filterButton2);
