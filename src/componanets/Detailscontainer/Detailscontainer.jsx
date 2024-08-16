import "./Detailscontainer.css";
import iconcart from "../../assets/icon-cart.svg";

function Detailscontainer (){
    return(
       <div id="Detailsdiv">
<label id="per"> P E R F U M E </label>
<h1 id="Header">Gabrielle Essence Eau De Perfume  </h1>
<p id="Discription"> A floral, solar and voluptuous interpretaion composed by olivier polge , perfume-creator for the House of CHANEL </p>
<div id="pricediv">
    <label id="pricelabel"> $149.99 </label>
    <label id="discountprice"> <s> $169.99 </s></label>
</div>
<button id="cartbtn"> 
    <img src={iconcart}></img>
    <span> Add to cart </span>
    </button>
       </div>
    )
}
export default Detailscontainer
