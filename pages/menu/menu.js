var section = document.querySelector('section')
var menu = {
    en: [
        { //* Salads
            category: 'SALADS',
            food: [
                {
                    image: '',
                    name: 'Salad with Cucumbers and Tomatoes',
                    price: 12.00,
                },
                {
                    image: '',
                    name: "Salad with Cucumbers and Tomatoes with Walnuts",
                    price: 14.00,
                },
                {
                    image: '',
                    name: 'Mushroom Salad with Vegetables and Georgian Spices',
                    price: 14.00,
                },
                {
                    image: '',
                    name: "Chicken Salad with Georgian Spices",
                    price: 15.00,
                },
            ],
        },
        { //* Cold Dishes
            category: 'COLD DISHES',
            food: [
                {
                    image: '',
                    name: 'Satsivi: Chicken, Walnuts Sauce, Georgian Spices',
                    price: 30.00,
                },
                {
                    image: '',
                    name: "Local Cheese",
                    price: 15.00,
                },
                {
                    image: '',
                    name: 'Sulguni Cheese',
                    price: 16.00,
                },
                {
                    image: '',
                    name: "Smoked Sulguni Cheese",
                    price: 17.00,
                },
                {
                    image: '',
                    name: 'Georgian Cheese Assortment',
                    price: 30.00,
                },
                {
                    image: '',
                    name: "Eggplant with Walnuts",
                    price: 15.00,
                },
                {
                    image: '',
                    name: 'Bell Pepper with Walnuts',
                    price: 15.00,
                },

                {
                    image: '',
                    name: "Spinach with Walnuts",
                    price: 15.00,
                },
                {
                    image: '',
                    name: "Pkhali Assortment",
                    price: 25.00,
                },
                {
                    image: '',
                    name: 'Pickles Assortment',
                    price: 17.00,
                },
                {
                    image: '',
                    name: "Olives",
                    price: 8.00,
                },
            ],
        },
        { //* Hot Dishes
            category: 'HOT DISHES',
            food: [
                {
                    image: '',
                    name: 'Ostri: Beef Stewed with Tomato Sauce',
                    price: 24.00,
                },
                {
                    image: '',
                    name: "Georgian Beans in Clay Pot",
                    price: 14.00,
                },
                {
                    image: '',
                    name: 'Adjafsandali: Vegetarian Stew Made with Eggplants',
                    price: 17.00,
                },
                {
                    image: '',
                    name: "Ojakhuri: Pork, Potato, Georgian Spices",
                    price: 20.00,
                },
                {
                    image: '',
                    name: 'Ojakhuri: Veal, Potato, Georgian Spices',
                    price: 29.00,
                },
                {
                    image: '',
                    name: "Ojakhuri: Chicken, Potato, Georgian Spices",
                    price: 19.00,
                },
                {
                    image: '',
                    name: 'Ojakhuri: Mushroom, Potato, Georgian Spices',
                    price: 18.00,
                },
                {
                    image: '',
                    name: "Veal Ribs with Adjika",
                    price: 35.00,
                },
                {
                    image: '',
                    name: 'Chakhokhbili: Chicken Stew with Tomatoes and Eggs',
                    price: 32.00,
                },
                {
                    image: '',
                    name: "Shkmeruli: Chicken, Sour Cream, Garlic, Butter",
                    price: 32.00,
                },
                {
                    image: '',
                    name: 'Tabaka: Fried Chicken',
                    price: 26.00,
                },
                {
                    image: '',
                    name: "Mushroom on Ketsi",
                    price: 15.00,
                },
                {
                    image: '',
                    name: 'Mushroom with Sulguni Cheese on Ketsi',
                    price: 17.00,
                },
                {
                    image: '',
                    name: "Omelette with Sulguni Cheese",
                    price: 12.00,
                },
            ],
        },
        { //* Soups
            category: 'SOUPS',
            food: [
                {
                    image: '',
                    name: 'Soup-Kharcho: Beef, Tomato, Rice, Herbs',
                    price: 16.00,
                },
                {
                    image: '',
                    name: "Chikhirtma: Chicken Broth with Eggs",
                    price: 14.00,
                },
                {
                    image: '',
                    name: 'Mushroom Soup: Mushroom, Carrot, Herbs',
                    price: 14.00,
                },
                {
                    image: '',
                    name: "Mushroom Cream Soup",
                    price: 16.00,
                },
                {
                    image: '',
                    name: 'Chicken Cream Soup',
                    price: 16.00,
                },
            ],
        },
    ],
}

var menuSelected = {
    totalPrice: 0,
}

menu.en.forEach(category => {
    section.innerHTML += `
        <div class="category">
            <div class="category-name">
                <div class="arrowhead-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                </div>
                <h2>${category.category}</h2>
            </div>
            <ul>
                ${category.food.map(item => `
                    <li class="item">
                        <img src="https://img.freepik.com/premium_photo/isolated_plate_georgian_khinkali_dumplings_219193-6644.jpg" alt="${item.name}">
                        <div class="food-name">${item.name}</div>
                        <strong>
                            <div class="food-price">₾${item.price.toFixed(2)}</div>
                        </strong>
                        <div class="add-to-card-div-main">
                            <div class="add-to-card-div">
                                <button class="minus-btn plus_minus_btn" id="minusBtn" onclick="plusMinusBtn('minus', this)"><i class="fa-solid fa-minus"></i></button>
                            <p class="quantity" id="quantity"></p>
                            <button class="plus-btn plus_minus_btn" id="plusBtn" onclick="plusMinusBtn('plus', this)"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </li>
                `).join('')}
            </ul>
            <div class="scroll-div">
                <i class="fa-solid fa-chevron-left" onclick="scrollMenu('prev', this)"></i>
                <i class="fa-solid fa-chevron-right" onclick="scrollMenu('next', this)"></i>
            <div>
        </div>`;
});


function scrollMenu(nextPrev, btn) {
    var scrollContainer = btn.closest('.category').querySelector('ul');
    if (!scrollContainer) return;

    var scrollWidth = scrollContainer.scrollWidth / 100;

    if (nextPrev === 'next') {
        scrollContainer.scrollBy({ left: scrollWidth, behavior: "smooth" });
    } else if (nextPrev === 'prev') {
        scrollContainer.scrollBy({ left: -scrollWidth, behavior: "smooth" });
    }
}


var quantities = {};

function plusMinusBtn(plusMinus, btn) {
    var item = btn.closest('.item');
    if (!item) return;

    var quantityElement = item.querySelector('#quantity');
    var itemName = item.querySelector('.food-name').textContent.trim();

    if (!(itemName in quantities)) {
        quantities[itemName] = 0;
    }

    if (plusMinus === 'plus') {
        quantities[itemName]++;
    } else if (plusMinus === 'minus' && quantities[itemName] > 0) {
        quantities[itemName]--;
    }

    quantityElement.textContent = quantities[itemName];
    console.log(quantities[itemName], quantityElement.textContent);

    var plusMinusBtns = item.querySelectorAll('.plus_minus_btn');
    plusMinusBtns.forEach(btn => btn.classList.add('clicked'));
}

var addToCardBtns = document.querySelectorAll('.plus_minus_btn')
var categoriesName = document.querySelectorAll('.category-name')
var categories = document.querySelectorAll('.category')
var showMyOrderBtn = document.querySelector('.show-my-order')

addToCardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        var item = btn.closest('.item');
        var itemName = item.querySelector('.food-name').textContent.trim();
        var quantity = parseInt(item.querySelector('#quantity').textContent);
        var itemPrice = parseFloat(item.querySelector('.food-price').textContent.trim().replace('₾', ''));
        var price = itemPrice * quantity

        menuSelected[itemName] = { price, quantity };
        totalPrice()
        showMyOrderedMenu();
        console.log(menuSelected);
        if (Object.keys(menuSelected.length > 1)) {
            showMyOrderBtn.classList.add('show');
        }
    });
});

function totalPrice() {
    var total = 0;
    for (var i in menuSelected) {
        if (i !== 'totalPrice') {
            total += menuSelected[i].price
        }
    }
    menuSelected.totalPrice = total.toFixed(2);
}


var showMenuSection = document.querySelector('.menu-container section table tbody');
var showMainMenuSection = document.querySelector('.menu-container section')

function showMyOrderedMenu() {
    showMenuSection.innerHTML = '';
    Object.keys(menuSelected).forEach(itemName => {
        if (!itemName === 'totalPrice') {
            var item = menuSelected[itemName];
            showMenuSection.innerHTML += `
            <div class="my-order-item">
                <div class="food-name">${itemName}</div>
                <strong>
                    <div class="food-price">₾${item.price.toFixed(2)}</div>
                </strong>
                <div class="quantity">Quantity: ${item.quantity}</div>
            </div>
        `;
        }
    });
}



var showHideMyOrder = document.querySelectorAll('.show-hide-my-order')
var menuContainer = document.querySelector('.menu-container')
var body = document.querySelector('body')
var myMenu = document.querySelector('.menu-container section')

showHideMyOrder.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.show-my-order').classList.toggle('show');
        menuContainer.classList.toggle('focus');
        menuContainer.parentNode.style.top = (window.scrollY + 10) + 'px';
        menuContainer.parentNode.classList.toggle('focus');
        body.classList.toggle('no-scroll');
        menuContainer.parentNode.classList.toggle('up');

        showMenuSection.innerHTML = '';
        console.log(showMainMenuSection);

        var myOrderedMenu = ""
        for (var i in menuSelected) {
            if (i != 'totalPrice') {
                console.log(i);
                myOrderedMenu += `
                        <tr>
                            <td><div class="food-name">${i}</div></td>
                            <td><div class="quantity">Quantity: ${menuSelected[i].quantity}</div></td>  
                            <td><strong><div class="food-price">₾${menuSelected[i].price.toFixed(2)}</div></strong></td>
                        </tr>
                        <br>
            `;
            }
        }
        myOrderedMenu += `
            <div class="total-price">Total Price: <strong>₾${menuSelected.totalPrice}</strong></div>
        `
        showMenuSection.innerHTML = myOrderedMenu;

        if (!menuContainer.classList.contains('focus')) {
            showMyOrderBtn.classList.add('show');
            showMenuSection.innerHTML = '';
        }
    });
});


window.addEventListener('click', (e) => {
    let isClickInsideMenuButton = false;

    showHideMyOrder.forEach(button => {
        if (button.contains(e.target)) {
            isClickInsideMenuButton = true;
        }
    });

    if (!isClickInsideMenuButton && !menuContainer.contains(e.target)) {
        menuContainer.parentNode.classList.add('up');
        menuContainer.parentNode.style.top = '0px';
        menuContainer.classList.remove('focus');
        menuContainer.parentNode.classList.remove('focus');
        body.classList.remove('no-scroll');
    }
});

categoriesName.forEach(categoryName => {
    categoryName.addEventListener('click', () => {
        if (!categoryName.parentNode.classList.contains('active')) {
            categoriesName.forEach(item => item.parentNode.classList.remove('active'));
        }

        categoryName.parentNode.classList.toggle('active');
    });
});

var takeScreenshotContainer = document.querySelector('.menu-container');
var downloadBtn = document.querySelector('.take-screenshot-btn');

async function takeScreenshot() {
    try {
        var canvas = await html2canvas(takeScreenshotContainer, { useCORS: true });
        var imageUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'menu.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showMyOrderBtn.classList.add('show');

    } catch (error) {
        console.error("Screenshot failed:", error);
    }
}
