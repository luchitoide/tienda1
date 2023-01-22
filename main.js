const menuMail = document.querySelector('.navemail');
const menuMobile = document.querySelector('.menu');
const cart = document.querySelector('.navcart');


const desktopMenu = document.querySelector('.dekstop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.shopping-cart-detail');
const cardsCont = document.querySelector('.cards-container');



menuMail.addEventListener('click', toggleDEsktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCart);

function toggleDEsktopMenu() {
    shoppingCart.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    shoppingCart.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCart() {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCart.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: 'Zapatos muneca',
    price: 15000,
    image:'./images/shoes1.webp'
})
productList.push({
    name: 'Combo zapatos+cartera ',
    price: 25000,
    image:'./images/combo1.webp'
})
productList.push({
    name: 'Mama y Papa Noel',
    price: 34000,
    image:'./images/muneco1.webp'
})
productList.push({
    name: 'Muneca Katy',
    price: 28000,
    image:'./images/muneco2.webp'
})
productList.push({
    name: 'Muneca Bella Navidad',
    price: 33000,
    image:'./images/muneco3.webp'
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName)
    
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

