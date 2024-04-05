
// login password
function loginDetail() {
    let showPassword = document.getElementById('showPassword');
    let inputPassword = document.getElementById('inputPassword');
    showPassword.onclick = function () {
        if (inputPassword.type == 'password') {
            inputPassword.type = 'text';
        } else {
            inputPassword.type = 'password';
        }
    }
}

// signup password

function signUpDetail() {
    let showPassword = document.getElementById('showPassword');
    let showPassword2=document.getElementById('showPassword2');
    let inputPassword = document.getElementById('inputPassword');
    let inputPassword2 = document.getElementById('inputPassword2');
    showPassword.onclick = function () {
        if (inputPassword.type == 'password') {
            inputPassword.type = 'text';
        } else {
            inputPassword.type = 'password';
        }
    }
    showPassword2.addEventListener('click',()=>{
        if(inputPassword2.type == 'password')
        {
            inputPassword2.type='text';
        }
        else{
            inputPassword2.type='password';
        }
    });

}


// color change

var links = document.querySelectorAll(".all-link");

links.forEach(function (link) {
    link.addEventListener('click', function () {

        links.forEach(function (link) {
            link.classList.remove('active');

        });

        this.classList.add('active');
    });
});

// homepage menu and close
function loadMenu() {
    const header = document.querySelector("header");
    const menuBar = document.querySelector("#menu-bar");
    const closeMenuBar = document.querySelector("#close-menu-bar");


    menuBar.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    closeMenuBar.addEventListener("click", () => menuBar.click());
}



// header color change on scroll

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 600) {
        header.style.backgroundColor = "#fff";
    }
    else {
        header.style.backgroundColor = "transparent";
    }

    
});






// products and search

let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Apple',
        price: 200,
        actual_price: 400,
        image: 'apple.jpg',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 2,
        name: 'Black Grapes',
        price: 80,
        actual_price: 400,
        image: 'grape.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 3,
        name: 'Custard Apple',
        price: 80,
        actual_price: 400,
        image: 'custard-apple.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 4,
        name: 'Kiwi',
        price: 120,
        actual_price: 400,
        image: 'kiwi.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 5,
        name: 'Orange',
        price: 60,
        actual_price: 400,
        image: 'orange.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 6,
        name: 'Papaya',
        price: 30,
        actual_price: 400,
        image: 'papaya.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 7,
        name: 'Pine Apple',
        price: 40,
        actual_price: 400,
        image: 'pine-apple.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 8,
        name: 'StrawBerry',
        price: 100,
        actual_price: 400,
        image: 'strawberry.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 9,
        name: 'Tomato',
        price: 40,
        actual_price: 400,
        image: 'tomato.avif',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 10,
        name: 'Mirchi',
        price: 60,
        actual_price: 400,
        image: 'mirchi.avif',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 11,
        name: 'Potato',
        price: 40,
        actual_price: 400,
        image: 'potato.avif',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 12,
        name: 'Pomegranate',
        price: 200,
        actual_price: 400,
        image: 'pomegranate.avif',
        nature: {
            type: 'fruits'
        }
    },
    {
        id: 13,
        name: 'CauliFlower',
        price: 30,
        actual_price: 400,
        image: 'cauli.jpg',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 14,
        name: 'Carrot',
        price: 30,
        actual_price: 400,
        image: 'carrot.jpg',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 15,
        name: 'Brinjal',
        price: 40,
        actual_price: 400,
        image: 'brinjal.jpg',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 16,
        name: 'Beet root',
        price: 40,
        actual_price: 400,
        image: 'beetroot.jpg',
        nature: {
            type: 'vegetables'
        }
    },
    {
        id: 17,
        name: 'Capsicum',
        price: 30,
        actual_price: 400,
        image: 'capsi.jpg',
        nature: {
            type: 'vegetables'
        }
    },

];


// filting the information
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter) {
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.dataset.id = item.id;

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerHTML = item.name + " " + " " + `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        4/5
        
        `;
        newItem.appendChild(newTitle);

        // create price
        let priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        let oldPrice = document.createElement('span');
        let newPrice = document.createElement('span');

        oldPrice.classList.add('old-price');
        oldPrice.innerHTML = item.actual_price + '/- ';
        newPrice.innerText = item.price.toLocaleString() + '/-' + " (1KG)";
        priceDiv.append(oldPrice);
        priceDiv.append(newPrice);
        newItem.appendChild(priceDiv);

        let cartBtn = document.createElement('button');
        cartBtn.classList.add('cart-button');
        cartBtn.innerHTML = 'ADD TO CART';
        newItem.append(cartBtn);

        let buyBtn=document.createElement('button');
        buyBtn.classList.add('buy-button');
        buyBtn.innerHTML='BUY NOW';
        newItem.append(buyBtn);
        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if (valueFilter.category.value != '') {
            if (item.nature.type != valueFilter.category.value) {
                return false;
            }
        }

        // check name
        if (valueFilter.name.value != '') {
            if (!item.name.toLowerCase().includes(valueFilter.name.value.toLowerCase())) {
                return false;
            }
        }



        return true;
    })
    showProduct(productFilter);
});



// get previous data from local storage

function getDataFromLocalStorage() {
    let stringifiedData = localStorage.getItem("cartInfo");
    let parsedData = JSON.parse(stringifiedData);
    
    if (parsedData === null) {
        cart_count.textContent='0';
        return [];
    }
    else {
        cart_count.textContent = parsedData.length;
        return parsedData;
    }

}

let cart_count = document.getElementById('cart-product-count');

// adding elements to cart


const productContainer = document.getElementById('prod-container');

productContainer.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('cart-button')) {
        let productId = positionClick.parentElement.dataset.id;
        addToCart(productId);
    }
});

// calling local storage for any previous data


let carts = getDataFromLocalStorage();
const addToCart = (productId) => {
    let productInCart = carts.findIndex((value) => value.productId == productId);
    if (carts.length <= 0) {
        carts = [
            {
                productId: productId,
                quantity: 1
            }
        ];
    }
    else if (productInCart < 0) {
        carts.push({
            productId: productId,
            quantity: 1
        });
    }
    else {
        carts[productInCart].quantity = carts[productInCart].quantity + 1;
    }

    alert("Item added to cart");
    let jsonStr = JSON.stringify(carts);
    localStorage.setItem("cartInfo", jsonStr);


};














