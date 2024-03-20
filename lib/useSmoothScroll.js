import { useEffect } from 'react';

function smoothScroll(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  const offset = document.querySelector('nav').offsetHeight;
  const targetOffset = document.querySelector(target).offsetTop - offset;
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth'
  });
}

export default function SmoothScrollLinks() {
  useEffect(() => {
    const navbarLinks = document.querySelectorAll('nav a[href^="#"]');
    navbarLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      navbarLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
