// event handler
const inputTextHandler = (event: Event) => {
  const { value } = event.target as HTMLInputElement;

  if (!value) {
    return removeClass();
  }

  value.length !== validDataLength ? addClass(0) : addClass(1);
};

// fns
function addClass(classIndex: number) {
  const classNames = ['invalid', 'valid'];
  const activeClass = classNames[classIndex];
  const removeClass = classIndex === 0 ? classNames[1] : classNames[0];

  inputTextRef.classList.add(activeClass);

  inputTextRef.classList.contains(removeClass) &&
    inputTextRef.classList.remove(removeClass);
}

function removeClass() {
  inputTextRef.classList.contains('valid')
    ? inputTextRef.classList.remove('valid')
    : inputTextRef.classList.remove('invalid');
}

// refs
const inputTextRef = document.querySelector(
  '#validation-input'
) as HTMLInputElement;
const validDataLength = Number(inputTextRef.getAttribute('data-length'));

// event
inputTextRef?.addEventListener('blur', inputTextHandler);
