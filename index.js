
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("nav");
    const logo = document.getElementById("logo");

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      logo.src = "imag/bakery-color.png";
    } else {
      navbar.classList.remove("scrolled");
      logo.src = "imag/bakery-light-1.png"; 
    }
  });











  
  const counters = document.querySelectorAll('.counter');
  const speed = 150; // كلما قل الرقم كانت السرعة أعلى

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    // تنفيذ بعد التمرير للمكان
    const onScroll = () => {
      const sectionTop = counter.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight) {
        updateCount();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
  });