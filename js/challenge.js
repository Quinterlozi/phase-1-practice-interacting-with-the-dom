// Get DOM elements
const counter = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

// Set initial counter value
let count = 0;

// Set initial timer
let timer = setInterval(() => {
  count++;
  counter.textContent = count;
}, 1000);

// Event listeners
minusBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

plusBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

heartBtn.addEventListener('click', () => {
  // Create a new like
  const like = document.createElement('li');
  like.textContent = `${count} has been liked`;

  // Add like to likes list
  likesList.appendChild(like);
});

pauseBtn.addEventListener('click', () => {
  if (pauseBtn.textContent === 'pause') {
    // Pause timer and disable buttons
    clearInterval(timer);
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;
    commentInput.disabled = true;
    commentForm.querySelector('button').disabled = true;
    pauseBtn.textContent = 'resume';
  } else {
    // Resume timer and enable buttons
    timer = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    heartBtn.disabled = false;
    commentInput.disabled = false;
    commentForm.querySelector('button').disabled = false;
    pauseBtn.textContent = 'pause';
  }
});

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Create a new comment
  const comment = document.createElement('div');
  comment.textContent = commentInput.value;

  // Add comment to comments list
  commentsList.appendChild(comment);

  // Clear comment input field
  commentInput.value = '';
});