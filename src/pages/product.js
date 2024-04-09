// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

window.addEventListener('DOMContentLoaded', async () => {
 const urlId = window.location.search
 try {
  const response = await fetch(`${singleProductUrl}${urlId}`)
  if (response.status >= 200 && response.status <= 299) {
   const products = await response.json()
   const { id, fields } = products
   const { colors, company, description, name, price } = fields
   const img = fields.image[0].thumbnails.large.url;
   productID = id

   document.title = `${name}|comfy`
   pageTitleDOM.textContent = `home | ${name}`
   imgDOM.src = `${img}`
   titleDOM.textContent = `${name}`
   companyDOM.textContent = `by ${company}`
   priceDOM.textContent = `${formatPrice(price)}`
   descDOM.textContent = `${description}`
   colors.forEach((color) => {
    const span = document.createElement('span');
    span.classList.add('product-color');
    span.style.backgroundColor = `${color}`;
    colorsDOM.appendChild(span);
   });



  } else {
   console.log(response.status, response.statusText);
   centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a>
    </div> 
     `;
  }


 } catch (error) {
  console.log(error);
 }









 loading.style.display = 'none'
})
cartBtn.addEventListener('click', function () {
   addToCart(productID);
});

