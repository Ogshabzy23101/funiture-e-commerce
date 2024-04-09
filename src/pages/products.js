// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
import fetchProducts from '../fetchProducts.js';




const init = async () => {

 const pageLoad = getElement(".page-loading")
 if (store.length < 1) {
  const product = await fetchProducts()
  setupStore(product)
 }

 display(store, getElement(".products-container"))
 setupSearch(store)
 setupCompanies(store)
 setupPrice(store)
 pageLoad.style.display = "none"


}

init()