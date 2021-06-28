// refs
declare let inputCtrlsRef: HTMLDivElement;
declare let inputAmountRef: HTMLInputElement;
declare let btnCreateRef: HTMLButtonElement;
declare let btnRemoveRef: HTMLButtonElement;
declare let boxesOutputRef: HTMLDivElement;
inputCtrlsRef = document.querySelector('#controls');
inputAmountRef = inputCtrlsRef.firstElementChild as HTMLInputElement;
btnCreateRef = document.querySelector('[data-action="render"]');
btnRemoveRef = document.querySelector('[data-action="destroy"]');
boxesOutputRef = document.querySelector('#boxes');

// events
btnCreateRef.addEventListener('click', createBoxes);
btnRemoveRef.addEventListener('click', removeBoxes);

// fn create
function createBoxes() {
  const amountDiv = Number(inputAmountRef.value);
  // default sizes
  let divWidth = 30;
  let divHeight = 30;
  // ready items
  const arrayBoxes: HTMLDivElement[] = [];

  for (let i = 0; i < amountDiv; i += 1) {
    // create element
    const div = document.createElement('div');
    // makes color
    div.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    // makes sizing
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    divWidth += 10;
    divHeight += 10;
    // send to array
    arrayBoxes.push(div);
  }
  // publication in html
  boxesOutputRef.append(...arrayBoxes);
}

// fn remove
function removeBoxes() {
  boxesOutputRef.textContent = '';
}
