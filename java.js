 function addNewWEField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb=  doument.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertbBefore(newNode, weAddButtonOb);
    
}
/*function addNewAQField{
    let newNode = document.createElement("text area");
    newNode.classList.add("form-control");
    newNode.classList.add("form-control edu");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows,3");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb=  doument.getElementById("ad addButton");
    let weAddButtonOb = document.getElementById("aqAddButton");
    weOb.insertbBefore(newNode, aqAddButtonOb);
    
}*/

function generateCV(){
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML = nameField;
   document.getElementById("nameT2").innerHTML= nameField;

   document.getElementById("contactT").innerHTML= document.getElementById("contactField").value; ;

   document.getElementById("emailT").innerHTML= document.getElementById("emailtField").value; ;

   document.getElementById("addressT").innerHTML= document.getElementById("addressField").value; ;

   /*document.getElementById("exp1T").innerHTML= document.getElementById("exp4Field").value; ;*/

  /* document.getElementById("exp2T").innerHTML= document.getElementById("exp5Field").value; ;

   document.getElementById("exp3T").innerHTML= document.getElementById("exp6Field").value; ;*/

   document.getElementById("fbT").innerHTML= document.getElementById("fbField").value; ;
   
   document.getElementById("instaT").innerHTML= document.getElementById("instaField").value; ;

   document.getElementById("linkedT").innerHTML= document.getElementById("linkedField").value; ;

   document.getElementById("objectiveT").innerHTML= document.getElementById("objectiveField").value; ;

   let file= document.getElementById("imgField").files[0];
   console.log(file);

   let reader=new FileReader();

   reader.readAsDataURL(file);
   console.log(reader.result);

  reader.onloadend=function(){
    document.getElementById("imgTemplate").src=reader.result;
  };

   document.getElementById("cv-form").style.display="none"
   document.getElementById("cv-template").style.display="block"



}
function printCV(){
    window.print();
}
