const items = document.querySelectorAll('.slider .list .item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const totalItems = items.length;
let activeIndex = 0;


const setSlider = () => {
 
    document.querySelector('.slider .list .item.active')?.classList.remove('active');


    items[activeIndex].classList.add('active');

   
    prevBtn.classList.toggle('d-none', activeIndex === 0);
    nextBtn.classList.toggle('d-none', activeIndex === totalItems - 1);
};

// Event Listeners for Buttons
nextBtn.addEventListener('click', () => {
    if (activeIndex < totalItems - 1) {
        activeIndex++;
        setSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--;
        setSlider();
    }
});

// Function to set diameter dynamically
const setDiameter = () => {
    const slider = document.querySelector('.slider');
    const diameter = Math.hypot(slider.offsetWidth, slider.offsetHeight);
    document.documentElement.style.setProperty('--diameter', `${diameter}px`);
};


setSlider();
setDiameter();


window.addEventListener('resize', setDiameter);
