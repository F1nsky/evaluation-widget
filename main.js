const storageKey = 'article-rating';
const stars = [...document.querySelectorAll('.star')];
const status = document.querySelector('.status');
const resetButton = document.querySelector('.reset-button');
const dialog = document.querySelector('.modal-wrapper');
const feedbackForm = document.querySelector('.modal');
const feedbackMessage = document.querySelector('#feedback-message');
const closeButtons = document.querySelectorAll('.close-button');

let selectedRating = Number(localStorage.getItem(storageKey)) || 0;
let lastFocusedElement;

const renderRating = () => {
  stars.forEach((star) => {
    const value = Number(star.dataset.value);
    const isSelected = value === selectedRating;
    star.classList.toggle('active', value <= selectedRating);
    star.setAttribute('aria-checked', String(isSelected));
  });

  status.textContent = selectedRating
    ? `You selected ${selectedRating} out of 5.`
    : 'No rating selected yet.';
  resetButton.hidden = selectedRating === 0;
};

const openDialog = () => {
  lastFocusedElement = document.activeElement;
  dialog.hidden = false;
  document.body.classList.add('dialog-open');
  feedbackMessage.focus();
};

const closeDialog = () => {
  dialog.hidden = true;
  document.body.classList.remove('dialog-open');
  lastFocusedElement?.focus();
};

stars.forEach((star) => {
  star.addEventListener('click', () => {
    selectedRating = Number(star.dataset.value);
    localStorage.setItem(storageKey, String(selectedRating));
    renderRating();

    if (selectedRating < 5) {
      openDialog();
    }
  });
});

resetButton.addEventListener('click', () => {
  selectedRating = 0;
  localStorage.removeItem(storageKey);
  feedbackMessage.value = '';
  renderRating();
  stars[0].focus();
});

closeButtons.forEach((button) => button.addEventListener('click', closeDialog));

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closeDialog();
  status.textContent = `Thank you — your ${selectedRating}-star rating was submitted.`;
  feedbackForm.reset();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !dialog.hidden) {
    closeDialog();
  }
});

renderRating();
