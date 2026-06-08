// Remove "Read more" links from the page
document.addEventListener('DOMContentLoaded', function() {
  // Find all links that contain "Read more"
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.textContent.trim() === 'Read more →' || 
        link.textContent.trim() === 'Read more' ||
        link.textContent.includes('Read more')) {
      link.style.display = 'none';
    }
  });
});
