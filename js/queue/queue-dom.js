const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const newQueue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = ''
};

const generateListQueue = () => {
  // ... your code goes here
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    if(queueInput.value !== ''){
      newQueue.enqueue(queueInput.value)
      var newQNode = document.createElement('Li')
      newQNode.textContent = queueInput.value
      newQNode.setAttribute('class','active')
      queueUL.appendChild(newQNode)  
      clearQueueInput()
      warningBottomQueue.style.display = 'none'
    } 
  } catch (error) {
    // there was an overflow error, handle it
      warningTopQueue.innerHTML = error
      warningTopQueue.style.display = 'block'
      clearQueueInput()
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    newQueue.dequeue(queueInput.value)
    var liQToRemove = queueUL.firstChild
    queueUL.removeChild(liQToRemove)
    warningTopQueue.style.display = 'none'

  } catch (error) {
    // there was an underflow error, handle it
    warningBottomQueue.innerHTML = error
    warningBottomQueue.style.display = 'block'
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);