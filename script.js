// Animate fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 1.0 });

document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
  observer.observe(el);
});

// Detect center image with .gradient-ring
const rings = document.querySelectorAll('.gradient-ring');

function getCenterImage() {
  const slider = document.querySelector('.slider');
  const sliderRect = slider.getBoundingClientRect();
  const centerX = sliderRect.left + sliderRect.width / 2;

  let closest = null;
  let closestDistance = Infinity;

  rings.forEach(ring => {
    const rect = ring.getBoundingClientRect();
    const ringCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - ringCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest = ring;
    }
  });

  rings.forEach(ring => ring.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

setInterval(getCenterImage, 100);
