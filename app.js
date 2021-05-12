let counter = 0;

// Selectors
const userImage = document.querySelector('.user__image');
const userName = document.querySelector('.user__name');
const userRole = document.querySelector('.user__role');
const testimonialContainer = document.querySelector('.testimonial__container');
const testimonialText = document.querySelector('.testimonial__text');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const users = [
  {
    username: 'Tanya Sinclair',
    userrole: 'UX Engineer',
    testimony: ` " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommned this course enough. I'm now in the job of my dreams and so excited about the future. " `,
    imgSrc: './images/image-tanya.jpg',
  },
  {
    username: 'John Tarkpor',
    userrole: 'Junior Front-end Developer',
    testimony: ` "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting as a professional developer. " `,
    imgSrc: './images/image-john.jpg',
  },
];

// Functions
const toggleActive = type => {
  if (type === 'add') {
    userImage.classList.add('active');
    testimonialContainer.classList.add('active');
  }
  if (type === 'remove') {
    userImage.classList.remove('active');
    testimonialContainer.classList.remove('active');
  }
};

const displayUser = userdata => {
  const { username, userrole, testimony, imgSrc } = userdata;

  userImage.alt = username;
  userImage.src = imgSrc;
  userName.textContent = username;
  userRole.textContent = userrole;
  testimonialText.textContent = testimony;
};

const slideOut = count => {
  toggleActive('remove');
  setTimeout(() => {
    displayUser(users[count]);
    setTimeout(() => toggleActive('add'));
  });
};

const prevSlide = () => {
  counter <= 0 ? (counter = users.length - 1) : counter--;

  slideOut(counter);
};

const nextSlide = () => {
  counter >= users.length - 1 ? (counter = 0) : counter++;

  slideOut(counter);
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  displayUser(users[counter]);
  toggleActive('add');
});

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);
