const menuMail = document.querySelector('.navemail');
const menuMobile = document.querySelector('.menu');
const cart = document.querySelector('.navcart');
const closeButton = document.querySelector('.product-detail-close');


const desktopMenu = document.querySelector('.dekstop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.shopping-cart-detail');
const cardsCont = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail'); 



menuMail.addEventListener('click', toggleDEsktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCart);
closeButton.addEventListener('click', closeProductDetail);



function toggleDEsktopMenu() {
    shoppingCart.classList.add("inactive");
    productDetail.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    shoppingCart.classList.add("inactive");
    productDetail.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCart() {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
    shoppingCart.classList.toggle("inactive");
}

function openProductDetail(event){
    displayInfoInProductDetail(event);
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCart.classList.add("inactive");
    productDetail.classList.remove("inactive");
}

function closeProductDetail(){
    productDetail.classList.add("inactive");
}

function displayInfoInProductDetail(event){
    const infoProduct = event.composedPath();

    const new_img_product_detail = infoProduct[0].src;

    const product_info = infoProduct[1].childNodes[1];

    const price = product_info.querySelector('div p:first-child');
    const name = product_info.querySelector('div p:nth-child(2)');
    const description = product_info.querySelector('div p:nth-child(3)');
    const product_detail_img = productDetail.querySelector('img:nth-child(2)');
    product_detail_img.setAttribute('src', new_img_product_detail);
    product_detail_img.setAttribute('alt', name.textContent);

    const product_detail_price = productDetail.querySelector('.product-detail-info p:nth-child(1)');
    product_detail_price.innerText = price.textContent;

    const product_detail_name = productDetail.querySelector('.product-detail-info p:nth-child(2)');
    product_detail_name.innerText = name.textContent;

    const product_detail_description = productDetail.querySelector('.product-detail-info p:nth-child(3)');
    product_detail_description.innerText = description.textContent;
}


const productList = [];
productList.push({
    name: 'Zapatos muñeca',
    price: 15000,
    image:'./images/shoes1.webp',
    description: 'Hermosos zapatos de diferentes colores hechos a mano, especialmente disenados para tus munecas y/o decoraciones'
})
productList.push({
    name: 'Combo zapatos + cartera ',
    price: 25000,
    image:'./images/combo1.webp',
    description: 'Combo que incluye un par de zapatos en adicion a un par de accesorios cartera y bolso'
})
productList.push({
    name: 'Mama y Papa Noel',
    price: 34000,
    image:'./images/muneco1.webp',
    description: 'Pareja navideña de Mama y Papa Noel, ideal para decorar tu arbol o cualquier habitacion'
})
productList.push({
    name: 'Muñeca Katy',
    price: 28000,
    image:'./images/muneco2.webp',
    description: 'Muñeca que lleva un outfit invernal de abrigo negro estampado, junto a una bufanda y gorro color durazno, zapatillas negras y bolso blanco con flor estampada'
})
productList.push({
    name: 'Muñeca Bella Navidad',
    price: 33000,
    image:'./images/muneco3.webp',
    description: 'Muñeca que lleva un outfit de otoño compuesto por un abrigo de rombos rojos y negros, junto a un chaleco verde oliva y gorro escarlata, zapatillas blancas y cartera roja'
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click',openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;
        productDescription.style.display = 'none'

    
        productInfoDiv.append(productPrice, productName, productDescription);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(img,productInfo);
    
        cardsCont.appendChild(productCard);
    }
}

renderProducts(productList);

