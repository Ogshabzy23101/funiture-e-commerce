import { getElement } from '../utils.js';
import display from '../displayProducts.js';



const setupSearch = (store) => {
 const form = getElement(".input-form")
 const formInput = getElement(".search-input")


 form.addEventListener('keyup', (e) => {

  const value = formInput.value
  if (value) {
   const newStore = store.filter((product) => {
    let { name } = product
    name = name.toLowerCase()
    if (name.startsWith(value)) {
     return product
    }
   })
   display(newStore, getElement(".products-container"), true)
   if (newStore.length < 1) {
    const productCon = getElement('.products-container')
    productCon.innerHTML = `<h3 class="filter-error"> sorry no products match you search</h3>`
   }
  } else {
   display(store, getElement(".products-container"), true)
  }


 })
};

export default setupSearch;
