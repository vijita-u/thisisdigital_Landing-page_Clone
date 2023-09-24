gsap.from("#img1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: 60,
})
gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60,
})
gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60,
})
gsap.from("#page1 #hero-content", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
})
gsap.from("#page2 h5, #page2 h1, #page2 #about-us", {
    opacity: 0,
    stagger: 0.3,
    y: 10,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 50%",
    }
})

// Swiper JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    loop: true,
  });