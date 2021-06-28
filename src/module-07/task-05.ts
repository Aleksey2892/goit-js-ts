// refs
const inputRef = document.querySelector('#name-input') as HTMLInputElement;
const nameOutputRef = document.querySelector('#name-output');

// fn
const onInputText = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  const INIT_TEXT = 'незнакомец';

  if (nameOutputRef.textContent === INIT_TEXT) {
    nameOutputRef.textContent = '';
  }

  !inputRef.value
    ? (nameOutputRef.textContent = INIT_TEXT)
    : (nameOutputRef.textContent = value);
};

// event
inputRef?.addEventListener('input', onInputText);
