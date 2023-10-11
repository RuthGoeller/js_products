
const url = 'https://course-api.com/javascript-store-single-product'
const section = document.querySelector('.product')


const getData = async ()=>{
 
  try{
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const res = await fetch(`${url}?id=${id}`)
    const data = await res.json()

    display(data)

  }catch(err){
    alert(err)

  }

}
getData()

const display = (product) =>{

  const {url: img} = product.fields.image[0]
  const {name: title, description, company, price, colors} = product.fields
 
  const colorList = colors.map((color)=>`<span class="product-color" style="background: ${color};"></span>`).join('')
const html = `<div class="product-wrapper">
<img src="${img}" class="img" alt="${title}" />
   <div class="product-info">
     <h3>${title}</h3>
     <h5>${company}</h5>
     <span>${price / 100}</span>
     <div class="colors">
            ${colorList}
     </div>
     <p>
      ${description}
     </p>
     <button class="btn">add to cart</button>
   </div>
 </div>`
 section.innerHTML = html
  return html

}  





























