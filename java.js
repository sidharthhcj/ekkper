//variables......................................

/*const accountId= 144453 //fixx
let accountEmail="hitesh@gmail.com"
var accountPassword = "12345"
accountCity="Jaipur"
let accountState;
//accountId = 2

accountEmail="hand@.com"
accountPassword="1234"
accountCity="solan"
console.log(accountState);

/*
not use var beacuse of block and function block
*/

//console.table([accountId, accountEmail, accountPassword,accountcity])






//"use strict"; treat all js code as newer version

//alert( 3 + 3)


//variables.........................................

/*let name= "sidhu"
let age = 18   //string
let isLogged=false

/* number => 2 to power 53
big int
string => ""
bollean => true/false 
null => khali value
undefined=>
symbol => for uniqueness

object

console.log(typeof undefined);//undefined
console.log(typeof null);object*/



//conversion operation....................................
//let score=33;


const data = [
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/43/39/54/4339544a4506fd62f29f70ad587f3e19.png",
      title: "hp laptop",
      price: 33999,
    },
    {
      id: 3,
      img: "https://www.pngitem.com/pimgs/m/115-1156789_watches-png-image-watch-images-png-transparent-png.png",
      title: "watch",
      price: 650,
    },
    {
      id: 4,
      img: "https://www.pngmart.com/files/13/Smartwatch-Transparent-PNG.png",
      title: "smart watch",
      price: 3500,
    },
    {
      id: 5,
      img: "https://freepngimg.com/save/167213-table-alarm-clock-hq-image-free/1457x2120",
      title: "table alarm clock",
      price: 1200,
    },
    {
      id: 6,
      img: "https://freepngimg.com/thumb/watch/22805-5-wall-watch-transparent.png",
      title: "wall watch",
      price: 2299,
    },
    {
      id: 7,
      img: "https://freepngdownload.com/image/thumb/table-fan-png-hd-image.png",
      title: "table fan",
      price: 2129,
    },
    {
      id: 8,
      img: "https://freepngimg.com/save/49694-ceiling-fan-free-hq-image/1500x1279",
      title: "ceiling fan",
      price: 1939,
    },
    {
      id: 9,
      img: "https://freepngimg.com/thumb/bicycle/23483-6-bicycle-transparent-image-thumb.png",
      title: "cycle",
      price: 5499,
    },
    {
      id: 10,
      img: "https://i.pinimg.com/originals/d6/0c/ae/d60cae213c52ae8111a55da8ff28e5b8.png",
      title: "women dress",
      price: 4399,
    },
    {
      id: 11,
      img: "https://www.pngitem.com/pimgs/m/3-34902_man-in-a-suit-png-men-in-suits.png",
      title: "man dress",
      price: 8990,
    },
    {
      id: 12,
      img: "https://www.pngall.com/wp-content/uploads/5/Samsung-TV-PNG.png",
      title: "tv",
      price: 4599,
    },
    {
      id: 13,
      img: "https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281511_1280.png",
      title: "chair",
      price: 5999,
    },
    {
      id: 14,
      img: "https://t3.ftcdn.net/jpg/02/84/83/72/360_F_284837273_30nF5be8CSVlO1qphlFvQxR0bgSZPFLI.jpg",
      title: "dumbbell",
      price: 799,
    },
    {
      id: 15,
      img: "https://freepngimg.com/save/49525-barbell-image-free-transparent-image-hq/2000x1157",
      title: "Barbell",
      price: 2398,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
    {
      id: 1,
      img: "https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png",
      title: "acer laptop",
      price: 32990,
    },
  ];
  
  
  const allProduct = [
    ...new Set(
      data.map((item) => {
        return item;
      })
    ),
  ];
  
  document.getElementById("searchBar").addEventListener("keyup", (el) => {
    const searchData = el.target.value.toLowerCase();
    const filterData = allProduct.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchData);
    });
    disPlay(filterData);
  });
  
  const disPlay = (item) => {
    document.getElementById("allCards").innerHTML = item
      .map((el) => {
        let { img, title, price } = el;
        return `
          <div class = 'card'>
          <div class = 'imgBox'>
          <img class = 'images' src=${img}></img>
          </div>
          <div class='downCard'>
          <p>
          ${title}
          </p>
          <h2>$ ${price}.00</h2>
          <button>Add to Cart </button>
          </div>
          </div>
          `;
      })
      .join("");
  };
  disPlay(allProduct);
