var allproducts = document.querySelectorAll("h2")
var shopping = document.querySelector(".shopping")
var btn = document.querySelector("#btn")
var totalprice=0
var div1 = document.querySelector("#total-price")



allproducts.forEach(function(item){
    item.onclick=function(){
        shopping.innerHTML += item.textContent + ","
        totalprice += +(item.getAttribute("price"))
        if(shopping.innerHTML !="")
            btn.style.display = "inline-block"
    }
})

btn.onclick = function(){
   
div1.innerHTML=totalprice

    }


