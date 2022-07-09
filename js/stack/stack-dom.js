const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

var stackFirstChild = stackList.firstChild;

const addToStack = () => {
  try {
    // ... your code goes here
    if(stackInput.value !== ''){
      newStack.push(stackInput.value)
      var newNode = document.createElement('li');
      newNode.textContent = stackInput.value
      newNode.setAttribute('class','active')
      if(stackList.innerHTML === ''){
        stackList.appendChild(newNode)
      }else{
        stackList.insertBefore(newNode,stackFirstChild)
      }
      clearStackInput()
      warningBottomStack.style.display = 'none'
    }
  } catch (error) {
    // there was an overflow error, handle it
    warningTopStack.innerHTML = error
    warningTopStack.style.display = 'block'
    clearStackInput()
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    newStack.pop(stackInput.value)
    var liToRemove = stackList.lastChild
    stackList.removeChild(liToRemove)
    warningTopStack.style.display = 'none'
  } catch (error) {
    // there was an underflow error, handle it
    warningBottomStack.innerHTML = error
    warningBottomStack.style.display = 'block'
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);