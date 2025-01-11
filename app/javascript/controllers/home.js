// Hiệu ứng Scroll Animation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('main p');
    const scrollPosition = window.scrollY;
  
    sections.forEach((section) => {
      const sectionPosition = section.offsetTop;
      if (scrollPosition + window.innerHeight > sectionPosition) {
        section.style.opacity = '1';
        section.style.animation = 'fadeIn 1s forwards';
      }
    });
  });
  
  // Hiệu ứng khi cuộn trang
  const scrollButton = document.querySelector('.button');
  
  scrollButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector('#services').offsetTop,
      behavior: 'smooth'
    });
  });
  