
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    } else {
    entry.target.classList.remove('visible');
    }
});
}, {
root: document.querySelector('.timeline-wrapper'),
threshold: 0.5
});

document.querySelectorAll('.timeline-item').forEach(item => {
observer.observe(item);
});

function toggleSelect(element) {
  let answer = element.querySelector("p");
  let btn = element.querySelector("h5")
  answer.classList.toggle("hidden")
  btn.classList.toggle("hidden")
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}