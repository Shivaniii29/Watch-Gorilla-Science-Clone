const plusBox = document.getElementById('plusBox');
const plusIcon = document.getElementById('plusIcon');
const Boxes = document.querySelectorAll('.Box')
const Icon = document.getElementsByClassName('Icon')

const card = document.getElementById('card');
const text = document.getElementById('cardText');
const image = document.getElementById('cardImage');
const plusBox2 = document.getElementById('plusBox2');
const plusIcon2 = document.getElementById('plusIcon2');
const card2 = document.getElementById('card2');
const textt = document.getElementById('cardText2');
const image2 = document.getElementById('cardImage2');






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


 const swiperEl = document.querySelector('swiper-container');

  // ✅ Responsive settings
  Object.assign(swiperEl, {
    breakpoints: {
      // screens >= 768px → show 4 slides
      768: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      // screens < 768px → show 2 slides
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });

  swiperEl.initialize();

const swipers = document.querySelectorAll('.swiper');
swipers.forEach(swiper => {
   const belowDiv = swiper.querySelector('.belowDiv');
  const arrow = swiper.querySelector('.arrow');
  const text1 = belowDiv.querySelectorAll('h1');
  const text2 = belowDiv.querySelectorAll('.green');

  

  swiper.addEventListener('mouseenter', () => {
    swiper.style.transform = 'translateY(-10px)';
    swiper.style.transition = 'all 0.4s ease';
    // Background color change
    belowDiv.style.backgroundColor = '#FFE600';
    belowDiv.style.transition = 'all 0.4s ease';

    // Arrow color change
    arrow.style.backgroundColor = 'black';
    arrow.style.color = '#FFE600';
    arrow.style.transition = 'all 0.4s ease';

    // Text color change
    text1.forEach(t => {
      t.style.color = 'black'; // you can use white or any color you want
    });
    text2.forEach(t => {
      t.style.color = '#03F100'; // you can use white or any color you want
    });
  });

  swiper.addEventListener('mouseleave', () => {
     swiper.style.transform = 'translateY(0)';
    // Reset background
    belowDiv.style.backgroundColor = '';
    // Reset arrow
    arrow.style.backgroundColor = '#FFE600';
    arrow.style.color = 'black';
    // Reset text color
    text1.forEach(t => {
      t.style.color = ''; // goes back to original (white)
    });
    text2.forEach(t => {
      t.style.color = ''; // goes back to original (white)
    });
  });
});


 const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  // Show the overlay
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // disable scroll behind menu
  });

  // Close overlay when "X" clicked
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Auto-close when window resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });

  plusBox2.addEventListener('mouseenter', () => {
  plusBox2.style.backgroundColor = 'white'; // green background
  plusBox2.style.color = 'black'; // white text
  plusIcon2.style.transform = 'rotate(270deg)'; // rotate plus icon
});

plusBox2.addEventListener('mouseleave', () => {
  plusBox2.style.backgroundColor = '#FFE600'; // back to normal
  plusBox2.style.color = 'black';
  plusIcon2.style.transform = 'rotate(0deg)';
});

card2.addEventListener('mouseenter', () => {
    card2.style.backgroundColor='white'
  textt.style.color = '#03F100'; // change text color (green)
  image2.style.transform = 'scale(5)'; // zoom in image
});

card2.addEventListener('mouseleave', () => {
     card2.style.backgroundColor='#03F100'
  textt.style.color = 'black'; // back to normal
  image2.style.transform = 'scale(1)';
});