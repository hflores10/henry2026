const yearElement = document.querySelector('#current-year');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#main-menu');
const searchInput = document.querySelector('#portfolio-search');
const filterItems = document.querySelectorAll('.filter-item');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (searchInput && filterItems.length) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    filterItems.forEach((item) => {
      const text = `${item.textContent} ${item.dataset.keywords || ''}`.toLowerCase();
      item.classList.toggle('is-hidden', query.length > 0 && !text.includes(query));
    });
  });
}
