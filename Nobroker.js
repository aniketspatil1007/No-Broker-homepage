function buy(){
    // document.getElementById("content3-2").style.display="none";
    // document.getElementById("content3-2Buy").style.display="block";
    document.getElementById("buy").style.color="#fd3752";
    document.getElementById("buy").style.borderBottom="3px solid #fd3752";
    document.getElementById("rent").style.color="#afaaaa";
    document.getElementById("rent").style.borderBottom="3px solid transparent";
    document.getElementById("commercial").style.color="#afaaaa";
    document.getElementById("commercial").style.borderBottom="3px solid transparent";
    document.getElementById("content3-3").style.zIndex=("1");
    document.getElementById("content3-2").style.zIndex=("-1");
}
function rent(){
    document.getElementById("rent").style.color="#fd3752";
    document.getElementById("rent").style.borderBottom="3px solid #fd3752";
    document.getElementById("buy").style.color="#afaaaa";
    document.getElementById("buy").style.borderBottom="3px solid transparent";
    document.getElementById("commercial").style.color="#afaaaa";
    document.getElementById("commercial").style.borderBottom="3px solid transparent";
    
}
function commercial(){
    document.getElementById("commercial").style.color="#fd3752";
    document.getElementById("commercial").style.borderBottom="3px solid #fd3752";
    document.getElementById("rent").style.color="#afaaaa";
    document.getElementById("rent").style.borderBottom="3px solid transparent";
    document.getElementById("buy").style.color="#afaaaa";
    document.getElementById("buy").style.borderBottom="3px solid transparent";
    document.getElementById("content3-3").style.zIndex=("-1");
    document.getElementById("content3-2").style.zIndex=("1");

}