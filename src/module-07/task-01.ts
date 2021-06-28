// refs
const categoriesDomRef = document.querySelector('#categories');
const itemsDomRef = document.querySelectorAll('.item');

// fn
const getNumOfCategories = (domCatgRef: Element) => {
  const numOfCateg = domCatgRef.children.length;
  console.log(`В списке ${numOfCateg} категории.`);
};

const getCatgInfo = (domRef: NodeListOf<Element>) => {
  domRef.forEach((item) => {
    const categoryName = item.firstElementChild.textContent;
    const numOfElem = item.children[1].querySelectorAll('li').length;

    console.log(`Категория: [${categoryName}].`);
    console.log(`Количество элементов: [${numOfElem}].`);
  });
};

// call fn
getNumOfCategories(categoriesDomRef);
getCatgInfo(itemsDomRef);
