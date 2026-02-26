let products = [
    {
        id: 1,
        name: "Softovac Bowel Regulator",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 2,
        name: "Pax Vitamin C Tablets",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 3,
        name: "Digital Thermometer",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 4,
        name: "Gleen Hand Sanitizer",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },
 
    {
        id: 5,
        name: "Nutravita Vitamin B12",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 6,
        name: "Everherb Neem Capsules",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 7,
        name: "Blue Hand Sanitizer",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 8,
        name: "Gillette Shaving Kit",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 9,
        name: "Dabur Honitus Cough Syrup",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 10,
        name: "Liveasy Diabetic Protein Powder",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 11,
        name: "Aloe Liquid Detergent",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    },

    {
        id: 12,
        name: "Aaka Fabric Conditioner",
        price: 27.49,
        oldPrice: 39.99,
        discount: "15% OFF",
        rating: 4,
        reviews: 189,
        image: ""
    }

];

products.forEach((item, idx) => {
    document.getElementById("Product").innerHTML += `
    <div class="col-lg-3 col-md-6 my-4 justify-content-center align-items-center">
        <div class="aboutProduct">
            <div class="productName text-center">
                <div class="productImage">
                    <img src="./assets/images/image-${idx + 1}.png" alt="${item.name}">
                </div>
                <h5>${item.name}</h5>

                <div class="ratings">
                    ${'<i class="ri-star-fill"></i>'.repeat(item.rating)}
                    <span>(${item.reviews})</span>
                </div>

                <span class="discoundPrice">
                    <strong>$${item.price}</strong>
                </span>

                <span class="originalPrice">
                    <s>${item.oldPrice}</s>
                </span>

                <span class="offer">
                    ${item.discount}
                </span>

                <div class="cardBottom d-flex justify-content-center align-items-center">
                    <div class="like">
                        <i class="ri-heart-3-line rounded-circle"></i>
                    </div>
                    <div class="cartBtn rounded-2">
                        <i class="ri-shopping-cart-fill"></i>
                        <span>Add To Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});