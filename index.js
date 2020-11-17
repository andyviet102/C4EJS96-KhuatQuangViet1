let yes = document.getElementById("yes");
let no = document.getElementById("no");
let ans = document.getElementsByClassName("answer");

yes.addEventListener("click", () => {
  alert("oi doi oi dau cat moi");
});
no.addEventListener("mouseover", () =>{
   if (ans[0].style.flexDirection == "row"){
       ans[0].style.flexDirection = "row-reverse";
   }else{ ans[0].style.flexDirection = "row"}
});

