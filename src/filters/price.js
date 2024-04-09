import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
 const priceInput = getElement('.price-filter')
 const priceValue = getElement('.price-value')
 let maxPrice = store.map((product) => product.price)
 maxPrice = Math.max(...maxPrice)
 maxPrice = Math.ceil(maxPrice / 100)
 priceInput.value = maxPrice
 priceInput.max = maxPrice
 priceInput.min = 0
 priceValue.textContent = `value: ${maxPrice}`
 priceInput.addEventListener('input', () => {
  const value = parseInt(priceInput.value)
  priceValue.textContent = `value: $${value}`
  let newStore = store.filter((product) => product.price / 100 <= value)
  display(newStore, getElement('.products-container'), true)
  if (newStore.length < 1) {
   const productCon = getElement('.products-container')
   productCon.innerHTML = `<h3 class="filter-error"> sorry no product match your search</h3>`
  }
 })
};

export default setupPrice;
