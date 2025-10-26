const plusBox = document.getElementById('plusBox');
const plusIcon = document.getElementById('plusIcon');
const Boxes = document.querySelectorAll('.Box')
const Icon = document.getElementsByClassName('Icon')

const card = document.getElementById('card');
const text = document.getElementById('cardText');
const image = document.getElementById('cardImage');




plusBox.addEventListener('mouseenter', () => {
  plusBox.style.backgroundColor = 'white'; // green background
  plusBox.style.color = 'black'; // white text
  plusIcon.style.transform = 'rotate(270deg)'; // rotate plus icon
});

plusBox.addEventListener('mouseleave', () => {
  plusBox.style.backgroundColor = '#FFE600'; // back to normal
  plusBox.style.color = 'black';
  plusIcon.style.transform = 'rotate(0deg)';
});


Boxes.forEach(Box => {
  const Icon = Box.querySelector('.Icon');

  Box.addEventListener('mouseenter', () => {
    Box.style.backgroundColor = 'black';
    Box.style.color = '#21BF1F';
     Box.style.border = 'none';
    Icon.style.transform = 'rotate(270deg)';
    Icon.style.color='#FFE600';
  });

  Box.addEventListener('mouseleave', () => {
    Box.style.backgroundColor = '#FFE600';
    Box.style.color = 'black';
    Icon.style.transform = 'rotate(0deg)';
    Icon.style.color='black';
  });
});


card.addEventListener('mouseenter', () => {
    card.style.backgroundColor='white'
  text.style.color = '#03F100'; // change text color (green)
  image.style.transform = 'scale(5)'; // zoom in image
});

card.addEventListener('mouseleave', () => {
     card.style.backgroundColor='#03F100'
  text.style.color = 'black'; // back to normal
  image.style.transform = 'scale(1)';
});