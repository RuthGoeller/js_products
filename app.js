
const url = 'https://course-api.com/javascript-store-products';

const productDom = document.querySelector('.products-container')


const getProducts = async ()=>{
  try{
    const res = await fetch(url)
    const data = await res.json()
    if(!res.ok)throw new Error (`${res.status} error loading `)
    displayContent(data)


  }catch(err){
alert(err)
  }
}

getProducts()

const displayContent = (list)=>{
const display = list.map((product)=>{

  // name, image, price 
  const {id} = product
  const {price, name} = product.fields
  const {url} = product.fields.image[0]
  
  return `<a class="single-product" href="product.html?id=${id}">
  <img src="${url}" class="single-product-img img" alt="${name}" />
  <footer>
    <h5 class="name">${name}</h5>
    <span class="price">$${price}</span>
  </footer>
</a>`

}).join('')

productDom.innerHTML = display
}
