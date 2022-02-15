var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

function product(name,price,image,color){
    let that=this;
    this.name=name;
    this.price=price;
    this.image=image;
    this.color=color;

    this.ele=document.createElement("div");
    this.ele.className="product";

    this.ele.addEventListener("mouseenter",function(){
        that.ele.style.borderColor=that.color;
    })

    this.ele.addEventListener("mouseleave",function(){
        that.ele.style.borderColor="black";
    })

    this.ele.addEventListener("click",function(){
        popUp.style.display="flex";
        popUp.innerHTML="";
        let popUpProduct=JSON.parse(JSON.stringify(that));
        popUpProduct.eleImg=document.createElement("img");
        popUpProduct.eleImg.src=popUpProduct.image;
        popUpProduct.eleText=document.createElement("div");
        popUpProduct.eleText.innerHTML="Name: "+popUpProduct.name+"<br />Price: $"+popUpProduct.price;
        popUp.appendChild(popUpProduct.eleImg);
        popUp.appendChild(popUpProduct.eleText);
    });

    this.eleImg=document.createElement("img");
    this.eleImg.src=this.image;
    this.ele.appendChild(this.eleImg);

    this.eleText=document.createElement("div");
    this.eleText.innerHTML="Name: "+this.name+"<br />Price: $"+this.price;
    this.ele.appendChild(this.eleText);

    document.body.appendChild(this.ele);
}

let productObjects=[];
for(let i=0;i<products.length;i++){
    productObjects[i]=new product(products[i].name,products[i].price,products[i].image,products[i].color);
}

let popUp=document.createElement("div");
popUp.className="popUp";
popUp.style.display="none";
popUp.addEventListener("click",function(){
    popUp.style.display="none";
});
document.body.appendChild(popUp);

// If I click on the popUp div, it should hide it
// Create a div for each item in the array above
// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";
// inside of each div, the product's image should be on top of the text
// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black
// When Clicking on a product, it should display the popUp Menu over all the content
// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

