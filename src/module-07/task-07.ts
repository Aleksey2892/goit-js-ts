// refs
const inputSizeRef = document.querySelector(
  '#font-size-control'
) as HTMLInputElement;
const textRef = document.querySelector('#text') as HTMLSpanElement;

// event
inputSizeRef.addEventListener('input', inputSizeHandler); // eslint-disable-line
// event settings
inputSizeRef.step = '1';
inputSizeRef.max = '20';
inputSizeRef.min = '10';
inputSizeRef.valueAsNumber = 15;

// fn
function inputSizeHandler(event: Event) {
  const { value: sizeValue } = event.target as HTMLInputElement;

  textRef.style.fontSize = `${sizeValue}px`;
}
