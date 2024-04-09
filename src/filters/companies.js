import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
 // const companies = store.reduce((acc, curr) => {
 //  if (!acc.includes(curr.company)) {
 //   acc.push(curr.company)
 //  }
 //  return acc
 // }, ['all'])

 // es6 ways 
 let companies = ['all', ...new Set(store.map((product) => product.company))]

 const companyBtn = getElement('.companies')
 // display company btn function
 companyBtn.innerHTML = companies.map((company) => ` <button class="company-btn">${company}</button>`).join('')
 // filter function
 companyBtn.addEventListener('click', (e) => {

  const element = e.target
  if (element.classList.contains('company-btn')) {
   let Newstore = []
   if (element.textContent === 'all') {
    Newstore = [...store]
   } else {
    Newstore = store.filter((product) => product.company === element.textContent)
   }
   display(Newstore, getElement(".products-container"), true)
  }
 })
};

export default setupCompanies;
