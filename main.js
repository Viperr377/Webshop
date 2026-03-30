const products = document.querySelectorAll('.product');

const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    const target = document.getElementById('target-section');
    target.scrollIntoView({behavior: 'smooth'
    })

    products.forEach(product => {
      if (category === 'All' || product.dataset.category === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const query = searchInput.value.toLowerCase();

    const target = document.getElementById('target-section');
    target.scrollIntoView({behavior: 'smooth'});

    products.forEach(product => {
      const title = product.querySelector('h4').textContent.toLowerCase();
      if (title.includes(query)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
}
});