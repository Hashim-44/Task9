var siteNameInput = document.getElementById("bookmarkName");

var siteUrlInput = document.getElementById("siteURL");

var siteList = [];

var box = document.getElementById("myBox")


if(  localStorage.getItem( "sites" )!= null    ){

    siteList = JSON.parse(  localStorage.getItem(  "sites"  )  );
    displayData()
}



function addSite(){

if( validationName()==true && validationUrl()==true){
    var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
        }
        
        siteList.push( site )
        
        localStorage.setItem("sites" , JSON.stringify( siteList ) )
        
}
else{
box.classList.remove("d-none")
}


displayData();

clearForm();
}






function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
  
 }
 



 function displayData() {
    var cartona = "";
    for (var i = 0; i < siteList.length; i++) {
       cartona += `
         <tr>
         <td>  ${[i]}  </td>
         <td> ${siteList[i].name} </td>
         <td>
         <a href="${ siteList[i].url}" class="btn btn-success" ><i class="fa-regular fa-eye"></i> Visite</a>
</td>
         <td> 
            <button onclick=" deletesite(${i} ) " class="btn btn-danger "  > <i class="fa-solid fa-trash-can"></i> Delete</button>
         </td>
      </tr>
 
 
         `;
    }
 
    document.getElementById("tableContent").innerHTML = cartona;
 }



 function deletesite(index ) {

 siteList.splice( index , 1 )

 localStorage.setItem("sites" , JSON.stringify( siteList ) )

 displayData()
 }
 


function validationName() {
    var text = siteNameInput.value

    var regexName = /^[a-zA-Z0-9]{3,}$/

if (   regexName.test( text )  ) {
    siteNameInput.classList.add("is-valid")
    siteNameInput.classList.remove("is-invalid")
    return true

}
else{
siteNameInput.classList.add("is-invalid")
siteNameInput.classList.remove("is-valid")
return false
}

}

function validationUrl() {
    var text= siteUrlInput.value
    var regexUrl= /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]\w{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/;

    if (regexUrl.test(text)) {
        siteUrlInput.classList.add("is-valid")
    siteUrlInput.classList.remove("is-invalid")
    return true

    }

    else{
        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
        return false
    }

}


function closeAlert() {
    box.classList.add("d-none")
}

function letAlert() {
    box.classList.remove("d-none")
}










//  var hhh =/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]\w{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/;

//  var text = "https://regex101.com/"
//  console.log(
//     hhh.test( text )
//  );