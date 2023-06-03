
 function expOpen(){
    document.getElementById('experience').style.display =" block";
    document.getElementById('skills').style.display ="none";
    document.getElementById('education').style.display ="none";
    let Edu =document.getElementsByClassName("edu");
    let EduActive =Exp.classList.add("active");
    let Skl =document.getElementsByClassName("skl");
    let SklActive =Skl.classList.remove("active");
    let Exp = document.getElementsByClassName("exp");
    let ExpActive =Edu.classList.remove("active");
    
 }
 function eduOpen(){
    document.getElementById('education').style.display =" block";
    document.getElementById('skills').style.display ="none";
    document.getElementById('experience').style.display ="none";
    let Edu =document.getElementsByClassName("edu");
    let EduActive =Edu.classList.add("active");
    let Skl =document.getElementsByClassName("skl");
    let SklActive =Skl.classList.remove("active");
    let Exp = document.getElementsByClassName("exp");
    let ExpActive =Exp.classList.remove("active");
    
 }
 function skillOpen(){
    document.getElementById('skills').style.display =" block";
    document.getElementById('education').style.display ="none";
    document.getElementById('experience').style.display ="none";
    let Skl =document.getElementsByClassName("skl");
    let SklActive = Skl.classList.add("active");
    let Edu =document.getElementsByClassName("edu");
    let EduActive =Edu.classList.remove("active");
    let Exp =document.getElementsByClassName("exp");
    let ExpActive =Exp.classList.remove("active");
 }
 function sideOpen(){
   document.getElementById('sidenav').style.display =" block";
   
}
function sideClose(){
   document.getElementById('sidenav').style.display =" none";
   
}