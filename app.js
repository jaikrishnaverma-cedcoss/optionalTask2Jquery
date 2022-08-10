let x="The product has been around for over two years now, so the price hike has come as a surprise to everyone. The new price will come into effect from next month, which is just a few days away now. The news prices of Quest 2 headset will be $399 (Rs 31,870 approx) for the 128GB variant, and $499 (Rs 39,860 approx) for the higher 256GB storage model.";


const prdArr=[{prodName:"Virtual Reality",about:x,price:"40",quantiy:"1",img:"vr.jpg"},{prodName:"Smart Watch",about:x,price:"23",quantiy:"1",img:"sw.jpg"},{prodName:"Cam Drone",about:x,price:"33",quantiy:"1",img:"dr.jpg"}];
render(prdArr);
function render(arr)
{
    let tmp="";
    for(let i=0;i<arr.length;i++)
    tmp+=' <div class="row line"><div class="imgBox"><img src="'+arr[i].img+'" alt=""></div><div class="detail"><h3>'+arr[i].prodName+'</h3><p>'+arr[i].about+'</p><div class="row line2"><div class="row minp"><button onclick="gainer(this)">-</button><span id="quant">'+arr[i].quantiy+'</span><button onclick="gainer(this)">+</button></div><div class="row price"><span class="dikhao'+i+' min pp">'+arr[i].price+' &dollar;</span><button class="dikhao'+i+' final pp pricebtn">'+arr[i].price+' &dollar;</button></div></div></div></div>';

    $('#displaybox').html(tmp);
}
function gainer(btn)
{
    let action=btn.innerText;
    let span,quant;
    if(action=='-')
    {
        span=btn.nextSibling;
        quant=span.innerText;
        if(quant<=1)
        return true;
        quant=parseInt(quant);
        quant--;
    }else if(action=='+')
    {
        span=btn.previousSibling;
        quant=span.innerText;
        quant=parseInt(quant);
       quant++;
    }   

    span.innerText=quant;
    var line=btn.closest(".line");
    var indexline=Array.from(line.closest('#displaybox').children);
    let index = indexline.indexOf(line);

    var perPrice=parseInt(prdArr[index].price)/parseInt(prdArr[index].quantiy);
    prdArr[index].quantiy=quant;
    var price=perPrice*quant;//price of one product
    prdArr[index].price=price;
    
    // $('.dikhao'+index+':nth-child(1)').text(price+"$");
    $('.dikhao'+index+':nth-child(2)').text(price+"$");
    console.log(prdArr);
    total();

    
}
 function total()
 {
    let sum=0;
  for(let i=0;i<prdArr.length;i++)
  {
    sum+=parseInt(prdArr[i].price);
  }
  document.getElementById('subtotal').innerText=sum+"$";
  document.getElementById('tax').innerText=(sum*5/100)+"$";
  var grandTotal=(sum*105/100)+5;
  document.getElementById('total').innerText=grandTotal;

 }