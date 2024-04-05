
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

// load menu


const header = document.querySelector("header");
const menuBar = document.querySelector("#menu-bar");
const closeMenuBar = document.querySelector("#close-menu-bar");
menuBar.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
closeMenuBar.addEventListener("click", () => menuBar.click());



// header color change on scroll

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 10) {
        header.style.backgroundColor = "#fff";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
    
});


let totalPrice;

let bill=document.getElementById('bill');
function cartPage() {

    let cartCountEle=document.getElementById('cart-product-count');
    let cartCount=0;
     totalPrice=0;
    let retrievedJson = localStorage.getItem("cartInfo");
    let cartInformation = JSON.parse(retrievedJson);

    let listCartHtml = document.querySelector('#cart-container');
    listCartHtml.innerHTML = ' ';
    if (cartInformation.length > 0) {
        cartInformation.forEach(cart => {
            cartCount=cartCount+1;
            let newCart = document.createElement("div");
            newCart.classList.add('each-item');
            let positionProduct = listProducts.findIndex((value) => value.id == cart.productId);
            let info = listProducts[positionProduct];
            newCart.dataset.id = info.id;
            newCart.innerHTML = `
        <p id="trash-container">
                <span id="trash-icon" onclick="deleteCartItem(${info.id})"><lord-icon
                    src="https://cdn.lordicon.com/wpyrrmcq.json"
                    trigger="hover"
                    style="width:35px;height:35px">
                </lord-icon></span></p>
            <img src="${info.image}" alt="">
            <p>${info.name} 
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>
        4/5

            </p>
            <p><span class="item-old-price">${info.actual_price}/-</span> <span class="item-new-price">${info.price * cart.quantity}/-</span></p>
            <p ><input type="number" id="item-value" min="1" value="${cart.quantity}"> ( KG )</p>
        `;

        totalPrice=totalPrice+(info.price * cart.quantity);
        listCartHtml.appendChild(newCart);
        });
        bill.textContent=totalPrice;
     const  tempTotalPrice=totalPrice;
        
        
        
    }
    else{

        bill.textContent=totalPrice;

        listCartHtml.innerHTML="ADD PRODUCTS TO CART";

    }

    function returnPrice(){
        return totalPrice;
    }
    
    if(cartCount>0)
    {
        cartCountEle.textContent=cartCount;
        
    }
    else{
        cartCountEle.textContent='0';
    }

    return returnPrice;


}

//bill

let money=cartPage();

// remove cart element

function deleteCartItem(num) {
    // alert(num);

    let retrievedJson = localStorage.getItem("cartInfo");
    let cartInformation = JSON.parse(retrievedJson);

    cartInformation = cartInformation.filter(idValue => idValue.productId != num);

    let jsonStrData = JSON.stringify(cartInformation);
    localStorage.setItem('cartInfo', jsonStrData);
    cartPage();

}


function proceedToPay(){
    let priceMoney=money();
    if(priceMoney<=0)
    {
        alert('No Products in the Cart \nPlease Add Products to Cart');
    }
    else{
        
        alert(`Confirm Order\n Your bill : ${priceMoney} /-`);

        let Status=confirm("Would you like to confirm order");
        
        if(Status)
        {
            alert("Your order confirmed.. Stay cool")

        }
        else{
            alert("We are concelling Your Order")
        }
    }
}


