import 'normalize.css'


var tl = gsap.timeline();


tl.to('.title', {opacity: 1, y: -100, duration: 1 })

// tl.to('.reviews_item', {opacity: 1, y: 10, duration: 0.05})

tl.to(".animation_1", {duration: 0.1, opacity: 1, y: -20 })
  .to(".animation_2", {duration: 0.12, opacity: 1, y: -20 })
  .to(".animation_3", {duration: 0.14, opacity: 1, y: -20 })
  .to(".animation_4", {duration: 0.16, opacity: 1, y: -20 })
  .to(".animation_5", {duration: 0.18, opacity: 1, y: -20 });



  

