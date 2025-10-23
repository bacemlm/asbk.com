// <CHANGE> Fixed carousel - removed conflicting implementations
// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const name = this.querySelector('input[type="text"]').value
    const email = this.querySelector('input[type="email"]').value
    const message = this.querySelector("textarea").value

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`)
      this.reset()
    } else {
      alert("Please fill in all fields.")
    }
  })
}

// Scroll Animation for Cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".feature-card, .event-card, .team-card, .stat-card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(card)
})

// Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// <CHANGE> FIXED CAROUSEL - Single implementation
const nextButton = document.querySelector('.button-controls .next')
const prevButton = document.querySelector('.button-controls .prev')
const slide = document.querySelector('.slide')

let isAnimating = false

nextButton.addEventListener('click', function() {
  if (isAnimating) return
  isAnimating = true
  
  const items = document.querySelectorAll('.slide .item')
  slide.appendChild(items[0])
  
  setTimeout(() => {
    isAnimating = false
  }, 500)
})

prevButton.addEventListener('click', function() {
  if (isAnimating) return
  isAnimating = true
  
  const items = document.querySelectorAll('.slide .item')
  slide.prepend(items[items.length - 1])
  
  setTimeout(() => {
    isAnimating = false
  }, 500)
})