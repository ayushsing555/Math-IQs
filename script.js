btn3.addEventListener("click",()=>{
    document.getElementById("container").style.display="none"
    document.getElementById("quiz").style.display="block";
});
let w;
let flag=0;
let right=0;
btn3.addEventListener("click",quiz);
function quiz(){
    let sum=0;
    let operator=[];
  plus=document.getElementById("add").checked;
  sub=document.getElementById("sub").checked;
  mult=document.getElementById("mult").checked;
  devide=document.getElementById("devide").checked;
  modular=document.getElementById("modular").checked;
  if(plus==true){
    sum++;
    operator.push("+");
  }
  if(sub==true){
    sum++;
    operator.push("-");
  }
  if(mult==true){
    sum++;
    operator.push("*");
  }
  if(devide==true){
    sum++;
    operator.push("/");
  }
  if(modular==true){
      sum++;
      operator.push("%");
  }
  if(sum<=1){
    alert("please select at least two operator")
    location.reload()
  }
  let m=document.getElementById("quesno").value;
  let n=document.getElementById("queslength").value;
  var r=`Question: ${flag+1}/${m}`;
document.getElementById("current").innerHTML=r;
  var question="";
      for(i=1;i<=n;i++){
  let b=Math.floor(Math.random()*100);
  let c=Math.floor(Math.random()*operator.length);
  question+=`${b}${operator[c]}`;
  operator.splice(c,1);
  if(operator.length==0)
  {
    if(plus==true)
      operator.push("+");
     if(sub==true)
     operator.push("-");
    if(mult==true)
     operator.push("*");
    if(devide==true)
      operator.push("/");
    if(modular==true)
      operator.push("%");
  }
} 
question=question.substring(0, question.length - 1);
document.getElementById("Question").innerHTML=question;
}
   
// btn4 functionality
btn4.addEventListener("click",()=>{
    flag++;
     operator=[];
    plus=document.getElementById("add").checked;
    sub=document.getElementById("sub").checked;
    mult=document.getElementById("mult").checked;
    devide=document.getElementById("devide").checked;
    if(plus==true){
      operator.push("+");
    }
    if(sub==true){
      operator.push("-");
    }
    if(mult==true){
      operator.push("*");
    }
    if(devide==true){
      operator.push("/");
    }
    if(devide==true){
        operator.push("/");
      }
    if(modular==true)
      operator.push("%");
m=document.getElementById("quesno").value;
n=document.getElementById("queslength").value;
var r=`Question: ${flag+1}/${m}`;
document.getElementById("current").innerHTML=r;
let question=document.getElementById("Question").innerHTML;
var w=eval(question);
w=Math.ceil(w);
var a=document.getElementById("answer").value.trim();  
      var question1="";
      for(i=1;i<=n;i++){
  let b=Math.floor(Math.random()*100);
  let c=Math.floor(Math.random()*operator.length);
  question1+=`${b}${operator[c]}`;
  operator.splice(c,1);
  if(operator.length==0)
  {
    if(plus==true)
      operator.push("+");
     if(sub==true)
     operator.push("-");
    if(mult==true)
     operator.push("*");
    if(devide==true)
      operator.push("/");
  }
}
if(a==w){
    right++;
   console.log(a+"a");
   console.log(w+"w");
    var x=document.createElement("div");
    x.classList.add("right")
    var h2=document.createElement("h2");
    var b=document.createElement("b");
    let textNode1 = document.createTextNode("Question"+flag+".  "+question);
    let textNode2 = document.createTextNode("your answer: "+a);
    h2.appendChild(textNode1);
    b.appendChild(textNode2);
    x.appendChild(h2);
    x.appendChild(b);
    document.getElementById("analysis").appendChild(x);
}
else if(a!=w){
    console.log(a+"a");
    console.log(w+"w");
     var x=document.createElement("div");
     x.classList.add("wrong");
     var h2=document.createElement("h2");
     var b=document.createElement("b");
     let textNode1 = document.createTextNode("Question:"+flag+". "+question);
     let textNode2 = document.createTextNode("your answer:"+a+", ");
     let textnode3=document.createTextNode("Right answer: "+w);
     h2.appendChild(textNode1);
     b.appendChild(textNode2);
     b.appendChild(textnode3);
     x.appendChild(h2);
     x.appendChild(b);
     document.getElementById("analysis").appendChild(x);
 }
 question1=question1.substring(0, question1.length - 1);
 document.getElementById("Question").innerHTML=question1; 
 console.log(question1);
 document.getElementById("answer").value="";
 if(flag==m)
   {
       document.getElementById("current").style.display="none"
     let q=`You have scored ${right} out of ${flag}`;
     document.getElementById("Question").innerHTML=q;
     document.getElementById("answer").style.display="none";
     document.getElementById("btn5").style.display="block";
     document.getElementById("btn4").style.display="none"
   }
});
btn5.addEventListener("click",()=>{
    document.getElementById("quiz").style.display="none";
    document.getElementById("analysis").style.display="block"
})
btn6.addEventListener("click",()=>{
    location.reload();
})