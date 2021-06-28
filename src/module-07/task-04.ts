// refs
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

// events
btnDecrementRef.addEventListener('click', decrementValue);
btnIncrementRef.addEventListener('click', incrementValue);

// events setting
let counterValue = 0;

// fn
function decrementValue() {
  counterValue -= 1;
  counterValueRef.textContent = String(counterValue);
}

function incrementValue() {
  counterValue += 1;
  counterValueRef.textContent = String(counterValue);
}
