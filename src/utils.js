//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://www.course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://www.course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return formattedPrice;
}

const getStorageItem = (item) => {
  let StorageItem = localStorage.getItem(item)
  if (StorageItem) {
    StorageItem = JSON.parse(StorageItem) 
  } else {
    StorageItem = []
  }
  return StorageItem
}

const setStorageItem = (name, item) => {
  localStorage.setItem(name,JSON.stringify(item))
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
