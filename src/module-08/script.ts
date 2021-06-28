// GALLERY ARRAY
const gallery = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

interface IGallery {
  preview: string;
  original: string;
  description: string;
}
interface IProperties extends IGallery {
  idx: string;
}
interface IEventProperties {
  src: string;
  alt: string;
  idx: string;
}

// REFS OBJS
const refs = {
  ulGallery: document.querySelector('.js-gallery') as HTMLUListElement,
  modalBox: document.querySelector('.js-lightbox') as HTMLDivElement,
  modalImage: document.querySelector('.lightbox__image') as HTMLImageElement,
};

// FNS CREATE AND RENDER
(() => {
  refs.ulGallery.append(...createGalleryArr(gallery));
})();

function createGalleryArr(imgArray: IGallery[]) {
  return imgArray.map((img, idx) => {
    const { original, preview, description } = img;
    const strIdx = String(idx);

    return createLi({ original, preview, description, strIdx });
  });
}

function createLi(properties) {
  const item = document.createElement('li');
  item.classList.add('gallery__item');

  insertImg(item, properties);

  return item;
}

function insertImg(item: HTMLLIElement, properties: IProperties) {
  const { original, preview, description, idx } = properties;

  item.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  data-source="${original}" 
  data-idx="${idx}" 
  alt="${description}"/>
  </a>`
  );
}

// GALLERY LISTENER
refs.ulGallery.addEventListener('click', galleryHandler);

// EVENT FNS
function galleryHandler(event: Event) {
  const { nodeName, dataset, alt } = event.target as HTMLUListElement &
    HTMLImageElement;

  if (nodeName === 'IMG') {
    event.preventDefault();

    const eventProperties = {
      idx: dataset.idx,
      src: dataset.source,
      alt,
    };

    modalOpen(eventProperties);
  }
}

function modalOpen({ src, alt, idx }: IEventProperties) {
  refs.modalImage.src = src;
  refs.modalImage.alt = alt;
  refs.modalImage.dataset.idx = idx;
  refs.modalBox.classList.add('is-open');

  // ADD EVENT LISTENERS
  refs.modalBox.addEventListener('click', modalHandler);
  window.addEventListener('keydown', modalSwitchImg);
}

function modalHandler(event: Event & KeyboardEvent) {
  const { dataset, classList } = event.target as HTMLUListElement;

  // CLOSE MODAL
  const clickAction = dataset.action === 'close-lightbox';
  const clickOverlay = classList.value === 'lightbox__content';

  (clickAction || clickOverlay) && modalClose();
}

function modalSwitchImg(event: KeyboardEvent) {
  const actionKeys = ['ArrowLeft', 'ArrowRight', 'Escape'];
  const isKeyEsc = event.code === actionKeys[2];
  const isKeyArrow =
    event.code === actionKeys[0] || event.code === actionKeys[1];

  if (isKeyEsc) {
    modalClose();
    // SWITCHING IMG
  } else if (isKeyArrow) {
    const keyArrow = event.code;
    let imgIdx = Number(refs.modalImage.dataset.idx);

    const nextImg = () =>
      imgIdx < gallery.length - 1 ? (imgIdx += 1) : (imgIdx = 0);
    const prevImg = () =>
      imgIdx > 0 ? (imgIdx -= 1) : (imgIdx = gallery.length - 1);

    keyArrow === 'ArrowRight' ? nextImg() : prevImg();
    refs.modalImage.src = gallery[imgIdx].original;
    refs.modalImage.dataset.idx = String(imgIdx);
  }
}

function modalClose() {
  refs.modalBox.classList.remove('is-open');
  refs.modalImage.src = '';
  refs.modalImage.alt = '';

  // CLOSE LISTENERS
  refs.modalBox.removeEventListener('click', modalHandler);
  window.removeEventListener('keydown', modalHandler);
}
