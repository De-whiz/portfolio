// JavaScript for Portfolio Website Interactions

// Current testimonial index
let currentTestimonial = 0
const testimonials = document.querySelectorAll(".testimonial-card")

// FAQ functionality
function toggleFaq(index) {
  const faqItems = document.querySelectorAll(".faq-item")
  const currentItem = faqItems[index]
  const isActive = currentItem.classList.contains("active")

  // Close all FAQ items
  faqItems.forEach((item) => {
    item.classList.remove("active")
    const icon = item.querySelector(".faq-icon path")
    if (icon) {
      icon.setAttribute("d", "M12 6v6m0 0v6m0-6h6m-6 0H6")
    }
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    currentItem.classList.add("active")
    const icon = currentItem.querySelector(".faq-icon path")
    if (icon) {
      icon.setAttribute("d", "M18 12H6")
    }
  }
}

// Testimonial carousel functionality
function nextTestimonial() {
  testimonials[currentTestimonial].classList.remove("active")
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  testimonials[currentTestimonial].classList.add("active")
}

function previousTestimonial() {
  testimonials[currentTestimonial].classList.remove("active")
  currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
  testimonials[currentTestimonial].classList.add("active")
}

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000)

// Smooth scrolling for navigation links
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

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Form submission handling
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const data = Object.fromEntries(formData)

  // Simple form validation
  const requiredFields = ["name", "email", "phone", "message"]
  let isValid = true

  requiredFields.forEach((field) => {
    const input = this.querySelector(`[name="${field}"]`)
    if (!input || !input.value.trim()) {
      isValid = false
      if (input) {
        input.style.borderColor = "#ef4444"
      }
    } else if (input) {
      input.style.borderColor = "#d1d5db"
    }
  })

  if (isValid) {
    // Simulate form submission
    const submitBtn = this.querySelector(".form-submit")
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.")
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  } else {
    alert("Please fill in all required fields.")
  }
})

// Newsletter subscription
document.querySelector(".newsletter").addEventListener("submit", function (e) {
  e.preventDefault()
  const email = this.querySelector(".newsletter-input").value

  if (email && email.includes("@")) {
    alert("Thank you for subscribing to our newsletter!")
    this.querySelector(".newsletter-input").value = ""
  } else {
    alert("Please enter a valid email address.")
  }
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Set initial active states
  if (testimonials.length > 0) {
    testimonials[0].classList.add("active")
  }

  // Set initial FAQ state (second item active as per design)
  const faqItems = document.querySelectorAll(".faq-item")
  if (faqItems.length > 1) {
    faqItems[1].classList.add("active")
    const icon = faqItems[1].querySelector(".faq-icon path")
    if (icon) {
      icon.setAttribute("d", "M18 12H6")
    }
  }
})

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1"
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".service-card, .project-card, .testimonial-card, .experience-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})
