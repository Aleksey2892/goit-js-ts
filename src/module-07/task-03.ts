type TImages = { url: string; alt: string }[];

// data
const images: TImages = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// fn
const galleryDomRef = document.querySelector('#gallery');

const createLiRef = () => {
  const listRef = document.createElement('li');
  listRef.className = 'js-gallery-list';

  return listRef;
};

const createImgList = (url: string, alt: string) => {
  const li = createLiRef();
  li.insertAdjacentHTML(
    'afterbegin',
    `<img src='${url}' alt='${alt}' class='js-gallery-img' width='300'>`
  );

  return li;
};

const addImgToList = (images: TImages) => {
  return images.map((img) => createImgList(img.url, img.alt));
};

const addListToDomRef = (domRef: Element, images: TImages) => {
  domRef.append(...addImgToList(images));
};

// call fn
addListToDomRef(galleryDomRef, images);
