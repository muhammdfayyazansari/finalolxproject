var totalData = [];
var getuser;
var userLocate = window.location.href;
var lstd = userLocate.lastIndexOf('/')+1;
var file = userLocate.slice(lstd);
var file2 = "https://quizwithbootstrap.netlify.app/";
var flag;

function signup(){
  // // ********************FOR MULTIPLE USER ********************
var user = [];
  if(localStorage.getItem('totalData')){
        getuser = localStorage.getItem('totalData');
        totalData = JSON.parse(getuser);
    for(var i=0; i<totalData[0].users.length; i++){
      user.push(totalData[0].users[i])
    }
   }
  var getEmail = document.getElementById('suEmail');
  var getPass = document.getElementById('suPassword');
  var getName = document.getElementById('uName');
  console.log(user)
  if (getEmail.value && getPass.value && getName.value) {
    var obj = {
      email: getEmail.value,
      pass: getPass.value,
      name: getName.value
    };
    user.push(obj);
    var totalObj = {
      users : user
    }
    totalData[0] = totalObj;
    localStorage.setItem('totalData', JSON.stringify(totalData));
  } else {
    alert("All field are required")
  }










  // // ******************** One user only ********************
  //   var getEmail = document.getElementById('suEmail');
// var getPass = document.getElementById('suPassword');
// var getName = document.getElementById('uName');
// localStorage.setItem('email',getEmail.value);
// localStorage.setItem('password',getPass.value);
// localStorage.setItem('name',getName.value); 
// if(getEmail.value && getPass.value && getName.value){
//     window.location.href = './login.html';
//     // alert('redirect to logIn page')
// }else{
//     alert("All fields are required")
// }




}

function login(){
var totalData;
  var getEmail = document.getElementById('LiEmail');
  var getPass = document.getElementById('LiPassword');
  var currentUser = [{
    email : getEmail.value,
    pass : getPass.value
  }]
  var matchEmail;
  var matchPass;
  var userName;
  if(getEmail.value && getPass.value){
    if(localStorage.getItem('totalData') !== ""){
      getuser = localStorage.getItem('totalData');
      totalData = JSON.parse(getuser);
      // console.log(getuser)
      // console.log(totalData)
    }else{
      alert('user Not found')
    }
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    var match = function (value) {
      for (var i = 0; i < value.length; i++) {
        if (value[i].email === getEmail.value && value[i].pass === getPass.value) {
          matchEmail = value[i].email;
          matchPass = value[i].pass;
          userName = value[i].name;
          var newObj = {
            email: matchEmail,
            pass: matchPass,
            name: userName,
            flag: 'false'
          }
          value[i] = newObj;
          totalData[0].adPosts = ['fayayz'];
          break;
        } else {
          matchEmail = false;
          matchPass = false;
        }
      }
    }
    if(totalData){
      match(totalData[0].users);
    }
  
    if (matchEmail && matchPass) {
      localStorage.setItem('totalData', JSON.stringify(totalData));
       alert('user found')
      window.location.href = './index.html';
    } else {
      alert("User not found ")
  
    }
  }else{
    alert('All fields are required')
  }
 








// // ********************** FOR ONE USER ONLY *********************
// var getEmail = document.getElementById('LiEmail').value;
// var getPass = document.getElementById('LiPassword').value;
// var lclEmail=localStorage.getItem('email')
// var lclPass = localStorage.getItem('password')
// if(getEmail===lclEmail && getPass === lclPass){
//     flag=false;
// localStorage.setItem('flag',flag);
//     window.location.href = './index.html';
//     // alert('User Successfully login');
// }else{
//     // alert(getEmail + ' ' + lclEmail)
//     alert("User not found")
// }




}

var latestUserName;
function change(){
    window.location.href = './signup.html'

}
if (file === 'index.html') {
  if(localStorage.getItem('totalData')){
    getuser = localStorage.getItem('totalData');
    totalData = JSON.parse(getuser);
    // console.log(getuser)
    // console.log(totalData)
  }
  var currentUser;
  if(sessionStorage.getItem('currentUser')){
    userData = sessionStorage.getItem('currentUser')
    currentUser = JSON.parse(userData)
    // console.log(getuser)
    // console.log(totalData)
  }
  var userarr = totalData[0].users;
  var redirect;
  if(totalData[0].users){
    for (var i = 0; i < userarr.length; i++) {
      if (Object.keys(userarr[i]).length >= 4 && (currentUser[0].email === userarr[i].email) && currentUser[0].pass === userarr[i].pass) {
        latestUserName = userarr[i].name;
        redirect = "false";
        break;
      } else {
        redirect = "true";
      }
    }
  }
  if (file === 'index.html' && redirect !== "false") {
    change(); 
    console.log(redirect)
  }else{
    console.log("not rediret:" ,redirect)

  }
}
// if(latestUserName){
//   alert(latestUserName)
// }

// if((file === 'index.html' || userLocate === file2 ) && localStorage.getItem('flag')!== "false"){
//   console.log("fayyaz")
// change();
// }




// ******************************* back to top button *************************************
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}










// ************************** Ad Post function ******************************
function adPost(e){
window.location.href = "./post.html"
}


function postNow(){
var ad = [];

  var totalData;
  if(localStorage.getItem('totalData')){
    getuser = localStorage.getItem('totalData');
    totalData = JSON.parse(getuser);
for(var i=0; i<totalData[0].adPosts.length; i++){
  ad.push(totalData[0].adPosts[i])
}
}else{
    alert('Data Not found')
  }
  var title = document.getElementById('addTitle')
  var description = document.getElementById('description')
  var price = document.getElementById('price')
  var mainImage = document.getElementById('mainImg')
  var img1 = document.getElementById('img1')
  var img2 = document.getElementById('img2')
  // && description.value && price.value && mainImage.value && img1.value && img2.value
  if(title.value){
    var adPost = {
      title : title.value,
      description : description.value,
      price : price.value,
      mainImage : mainImage.value,
      img1 : img1.value,
      img2 : img2.value
    }
    ad.push(adPost);
    totalData[0].adPosts = ad
    localStorage.setItem('totalData', JSON.stringify(totalData));
    sessionStorage.setItem('currentPost', JSON.stringify(adPost));
    window.location.href = './index.html'
  }else{
    alert("All fields are required")
  }
 
console.log(totalData[0].adPosts)


  // console.log(adData.title)
  // console.log(adData.description)
  // console.log(adData.price)
  // console.log(adData.mainImage)
  // console.log(adData.img1)
  // console.log(adData.img2)
  
}


function showPosts(){
  var currentPostObj;
  var adPosts;
  if(localStorage.getItem('totalData') !== ""){
    var a = localStorage.getItem('totalData');
    var b = sessionStorage.getItem('currentPost')
    var totalData = JSON.parse(a);
    var postO = JSON.parse(b);
    adPosts = totalData[0].adPosts;
    console.log(adPosts)
    for(var i=0; i<adPosts.length; i++){
      if(postO.title === adPosts[i].title && postO.description === adPosts[i].description && postO.price === adPosts[i].price && postO.mainImage === adPosts[i].mainImage && postO.img1 === adPosts[i].img1 && postO.img2 === adPosts[i].img2){
        console.log(i,adPosts[i])
        currentPostObj = adPosts[i];
        break;
      }
    }
  }else{
  console.log('fayyaz')

  }
  // Create element of Ad Post 
  var mainDiv = document.getElementById('adPostDiv');
  var row = document.createElement('div');
  var contianerFluid = document.createElement('div');
  var innerRow = document.createElement('div');
  var flexDiv = document.createElement('div');

  var card = document.createElement('div');
  var createImage = new Image();

  var cardBody = document.createElement('div');
  var titleName = document.createElement('h6');
  var titlePrice = document.createElement('h5');
  var lineBreak = document.createElement('br');
  var lineBr = document.createElement('br');
  var para = document.createElement('p');
  


  // SET ATTRIBUTE IN CREATE ELEMENT OF POST
  row.setAttribute('class','row')
  contianerFluid.setAttribute('class','container-fluid')
  innerRow.setAttribute('class','row')
  flexDiv.setAttribute('class','col-6 p-0 d-flex justify-content-around')
  

  card.setAttribute('onclick','productDes(this);')
  card.setAttribute('class','class')
  titlePrice.setAttribute('style','width: 18rem;')
  createImage.setAttribute('alt','img')
  createImage.setAttribute('class','card-img-top')
  createImage.setAttribute('src', currentPostObj.mainImage)
  
  cardBody.setAttribute('class','card-body')
  cardBody.setAttribute('class','card-title')
  
  para.setAttribute('class','card-text')
  // CREATE TEXT NODE OF SOME ELEMENT
  var titleNameText = document.createTextNode(currentPostObj.title)
  var titlePriceText = document.createTextNode(currentPostObj.price)
  var paraText = document.createTextNode('Gulberg, Islamabad');
  para.appendChild(paraText)
  titleName.appendChild(titleNameText)
  titlePrice.appendChild(titlePriceText)
  
  // MAKE CHILD OF THE PARENT ELEMENT
  // mainDiv.appendChild(row);
  cardBody.appendChild(titleName);
  cardBody.appendChild(titlePrice);
  cardBody.appendChild(lineBreak);
  cardBody.appendChild(lineBr);
  cardBody.appendChild(para);

  card.appendChild(createImage);
  card.appendChild(cardBody);

  flexDiv.appendChild(card);
  flexDiv.appendChild(card);
  innerRow.appendChild(flexDiv);
  contianerFluid.appendChild(innerRow);
  row.appendChild(contianerFluid);
  mainDiv.appendChild(row)







}


























