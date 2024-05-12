let products = {
    data: [
      {
        
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "https://static.zara.net/assets/public/a55f/07cf/346140b496ef/60e24fed3fea/06224418250-a1/06224418250-a1.jpg?ts=1709114712346&w=364",
      },
      {
        productName: "Beige Short Shirt",
        category: "Bottomwear",
        price: "49",
        image: "https://static.zara.net/assets/public/5bf2/d4d3/b6934cd298b6/45acc56a1db4/04087436802-p/04087436802-p.jpg?ts=1709048246702&w=563",
      },
      {
        productName: "Sporty Smart",
        category: "Watch",
        price: "99",
        image: "https://static.zara.net/photos///2022/V/1/1/p/3625/910/040/2/w/563/3625910040_1_1_1.jpg?ts=1649414620546",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "https://static.zara.net/photos///2022/V/1/1/p/2631/910/040/2/w/563/2631910040_2_1_1.jpg?ts=1649414612449",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://static.zara.net/assets/public/5ec9/0076/0ac541d7864b/afc5c866a6f3/05575400711-p/05575400711-p.jpg?ts=1707468694410&w=563",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "https://static.zara.net/assets/public/2033/7d5e/e4544638990b/734f1e4c7c04/4000.jpg?ts=1694603202889&w=563",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://static.zara.net/assets/public/ac8c/955c/d87d45fd824f/31e29a601c57/07563505510-p/07563505510-p.jpg?ts=1709296633351&w=563",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://static.zara.net/photos///2023/I/0/2/p/8062/320/427/2/w/563/8062320427_2_1_1.jpg?ts=1695971085393",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };