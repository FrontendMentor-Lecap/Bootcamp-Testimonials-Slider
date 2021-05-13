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
    imgSrc: '/images/image-tanya.jpg',
  },
  {
    username: 'John Tarkpor',
    userrole: 'Junior Front-end Developer',
    testimony: ` "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting as a professional developer. " `,
    imgSrc: '/images/image-john.jpg',
  },
];

// Functions
let counter = 0;

const displayUser = userdata => {
  const { username, userrole, testimony, imgSrc } = userdata;

  userImage.src = imgSrc;
  userName.textContent = username;
  userRole.textContent = userrole;
  testimonialText.textContent = testimony;
};

const prevSlide = () => {
  counter <= 0 ? (counter = users.length - 1) : counter--;

  displayUser(users[counter]);
};

const nextSlide = () => {
  counter >= users.length - 1 ? (counter = 0) : counter++;

  displayUser(users[counter]);
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  displayUser(users[counter]);
});

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);
