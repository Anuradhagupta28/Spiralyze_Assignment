document.getElementById("country").addEventListener("change", function () {
  const label = document.querySelector('label[for="country"]');
  if (this.value) {
    label.style.transform = "translateY(-26px)";
    label.style.fontSize = "12px";
    label.style.color = "rgba(255, 255, 255, 0.9)";
    label.style.background =
      "linear-gradient(135deg, #4a9d8e 0%, #3a7968 100%)";
    label.style.padding = "2px 8px";
    label.style.borderRadius = "4px";
    label.style.fontWeight = "500";
  }
});

// testimonial part
const testimonials = [
  {
    name: "Abbie Harvey",
    image: "../Images/image4.png",
    text: "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. .",
  },
  {
    name: "John Smith",
    image: "./Images/image6.png",
    text: "The care and support provided has been exceptional. My family feels secure knowing that our loved ones are in such capable and compassionate hands.",
  },
  {
    name: "Sarah Johnson",
    image: "../Images/image7.png",
    text: "Professional, reliable, and caring - these are the words that best describe this service. The peace of mind knowing that quality care is available when needed is invaluable to our family.",
  },
];
let currentIndex = 0;

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
const container = document.querySelector(".testimonial-container");
const profileImg = container.querySelector("img");
const testimonialName = container.querySelector("h1");
const testimonialText = container.querySelector("p");
const dots = document.querySelectorAll(".dot");

function updateTestimonial(index) {
  const testimonial = testimonials[index];

  container.style.opacity = "0";

  setTimeout(() => {
    profileImg.src = testimonial.image;
    profileImg.alt = testimonial.name;
    testimonialName.textContent = testimonial.name;
    testimonialText.textContent = testimonial.text;

    container.style.opacity = "1";
  }, 150);
}

function updateButtons() {
  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (currentIndex === testimonials.length - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function goToTestimonial(index) {
  currentIndex = index;
  updateTestimonial(currentIndex);
  updateButtons();
  updateDots();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    goToTestimonial(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < testimonials.length - 1) {
    goToTestimonial(currentIndex + 1);
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToTestimonial(index);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  updateButtons();
  updateDots();

  container.style.transition = "opacity 0.3s ease";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && currentIndex > 0) {
    goToTestimonial(currentIndex - 1);
  } else if (e.key === "ArrowRight" && currentIndex < testimonials.length - 1) {
    goToTestimonial(currentIndex + 1);
  }
});
