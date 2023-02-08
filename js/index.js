
    var btn=document.getElementById("btn")
    var demo=document.getElementById("demo")
    
function getQuotes(){
    Arr = [
        "“You only live once, but if you do it right, once is enough.”<br>― Mae West","“Be the change that you wish to see in the world.” <br>― Mahatma Gandhi","“In three words I can sum up everything I've learned about life: it goes on.<br> ― Robert Frost","“If you tell the truth, you don't have to remember anything.” <br>― Mark Twain"
    ]

    for (var i = 0; i <=4; i++) {
        var random = Math.trunc(Math.random() *4);
        randArr = Arr[random]
        
        return randArr;
      }
      
      
        }
    
function two(){
    var x=getQuotes();
    demo.innerHTML=x


    
}
btn.addEventListener("click",two)
