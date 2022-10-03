var totalData = [];
var getuser;
var userLocate = window.location.href;
var lstd = userLocate.lastIndexOf('/') + 1;
var file = userLocate.slice(lstd);
var file2 = "https://olxwithbootstrap.netlify.app/";
var flag;

function signup() {

  // // ********************FOR MULTIPLE USER ********************
  var user = [];
  if (localStorage.getItem('totalData')) {
    getuser = localStorage.getItem('totalData');
    totalData = JSON.parse(getuser);
    for (var i = 0; i < totalData[0].users.length; i++) {
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
      users: user
    }
    totalData[0] = totalObj;
    localStorage.setItem('totalData', JSON.stringify(totalData));
    document.getElementById('singUPForm').reset();
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

function login() {
  var totalData;
  var getEmail = document.getElementById('LiEmail');
  var getPass = document.getElementById('LiPassword');
  var currentUser = [{
    email: getEmail.value,
    pass: getPass.value
  }]
  var matchEmail;
  var matchPass;
  var userName;
  if (getEmail.value && getPass.value) {
    if (localStorage.getItem('totalData') !== "") {
      getuser = localStorage.getItem('totalData');
      totalData = JSON.parse(getuser);
      // console.log(getuser)
      // console.log(totalData)
    } else {
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
          if (totalData[0].adPosts) {

          } else {
            totalData[0].adPosts = [{
              title: "Hilux Revo V 2021/2022",
              description: "Hilux Revo V full Option brand new like Zero meter",
              price: "11,000,000",
              mainImage: "https://images.olx.com.pk/thumbnails/290025965-400x300.webp",
              img1: "https://images.olx.com.pk/thumbnails/290025966-120x90.webp",
              img2: "https://images.olx.com.pk/thumbnails/290025971-400x300.webp"
            }
            ];
          }
          break;
        } else {
          matchEmail = false;
          matchPass = false;
        }
      }
    }
    if (totalData) {
      match(totalData[0].users);
    }

    if (matchEmail && matchPass) {
      localStorage.setItem('totalData', JSON.stringify(totalData));
      alert('user found')
      window.location.href = './index.html';
    } else {
      alert("User not found ")

    }
  } else {
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
function change() {
  window.location.href = './signup.html'

}
if (file === 'index.html' || userLocate === file2 || file === "post.html" || file === "product.html") {
  if (localStorage.getItem('totalData')) {
    getuser = localStorage.getItem('totalData');
    totalData = JSON.parse(getuser);
    // console.log(getuser)
    // console.log(totalData)
  } else (
    change()
  )
  var currentUser;
  if (sessionStorage.getItem('currentUser')) {
    userData = sessionStorage.getItem('currentUser')
    currentUser = JSON.parse(userData)
    // console.log(getuser)
    // console.log(totalData)
  }
  var userarr = totalData[0].users;
  var redirect;
  if (totalData[0].users) {
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
  if ((file === 'index.html' || userLocate === file2 || file === "post.html" || file === "product.html") && redirect !== "false") {
    change();
    console.log(redirect)
  } else {
    console.log("not rediret:", redirect)

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
window.onscroll = function () { scrollFunction() };

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
function adPost(e) {
  window.location.href = "./post.html"
}


function postNow() {
  var ad = [];

  var totalData;
  if (localStorage.getItem('totalData')) {
    getuser = localStorage.getItem('totalData');
    totalData = JSON.parse(getuser);
    for (var i = 0; i < totalData[0].adPosts.length; i++) {
      ad.push(totalData[0].adPosts[i])
    }
  } else {
    alert('Please Sign In First');
    window.Location.href = './login.html'
  }
  var title = document.getElementById('addTitle')
  var description = document.getElementById('description')
  var price = document.getElementById('price')
  var mainImage = document.getElementById('mainImg')
  var img1 = document.getElementById('img1')
  var img2 = document.getElementById('img2')

  if (title.value && description.value && price.value && mainImage.value && img1.value && img2.value) {
    var adPost = {
      title: title.value,
      description: description.value,
      price: price.value,
      mainImage: mainImage.value,
      img1: img1.value,
      img2: img2.value
    }
    ad.push(adPost);
    totalData[0].adPosts = ad
    localStorage.setItem('totalData', JSON.stringify(totalData));
    sessionStorage.setItem('currentPost', JSON.stringify(adPost));
    window.location.href = './index.html'
  } else {
    alert("All fields are required")
  }

  // console.log(totalData[0].adPosts)


  // console.log(adData.title)
  // console.log(adData.description)
  // console.log(adData.price)
  // console.log(adData.mainImage)
  // console.log(adData.img1)
  // console.log(adData.img2)

}



function showPosts() {
  var currentPostObj;
  var adPosts;
  if (localStorage.getItem('totalData') !== "") {
    var a = localStorage.getItem('totalData');
    var b = sessionStorage.getItem('currentPost')
    var totalData = JSON.parse(a);
    var postO = JSON.parse(b);
    adPosts = totalData[0].adPosts;
    console.log('adposts', adPosts);
    var countForId = 1;
    for (var i = 0; i < adPosts.length; i++) {
      var forRow = i % 4;
      var rowId;
      // if (postO.title === adPosts[i].title && postO.description === adPosts[i].description && postO.price === adPosts[i].price && postO.mainImage === adPosts[i].mainImage && postO.img1 === adPosts[i].img1 && postO.img2 === adPosts[i].img2) {
      //   console.log(i, adPosts[i])
      //   currentPostObj = adPosts[i];
      //   break;
      // } else {
      //   alert("No Ad Post Found In our Data Base")
      // }

      var mainDiv = document.getElementById('adPostDiv');
      if (forRow == 0) {
        // Create element of Ad Post 

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


        innerRow.setAttribute('class', 'row p-0 m-0 d-flex justify-content-start')
        rowId = "row" + countForId;
        innerRow.setAttribute('id', rowId.toString());
        countForId++;
        flexDiv.setAttribute('class', 'col-12 col-xs-6 col-sm-6 col-md-3 p-1')
        flexDiv.setAttribute('onclick', 'productDes(this);')


        card.setAttribute('class', 'card m-2')
        card.setAttribute('style', 'width:100%;')
        createImage.setAttribute('alt', 'Product Image')
        createImage.setAttribute('class', 'card-img-top')
        createImage.setAttribute('width', 'auto')
        createImage.setAttribute('height', '200vh')
        // createImage.setAttribute('src', './images/car.jpg')



        // createImage.setAttribute('src', currentPostObj.mainImage)
        createImage.setAttribute('src', adPosts[i].mainImage)



        cardBody.setAttribute('class', 'card-body')
        titlePrice.setAttribute('class', 'card-title')

        para.setAttribute('class', 'card-text')

        // CREATE TEXT NODE OF SOME ELEMENT
        // var titleNameTextH6 = document.createTextNode("Kawasaki Ninja ZX-300 REPLICA Bike/ 250cc, 400cc available")
        // var titlePriceTextH5 = document.createTextNode("Rs 199,00000")

        var titleNameTextH6 = document.createTextNode(adPosts[i].title)
        var titlePriceTextH5 = document.createTextNode("Rs " + adPosts[i].price)

        // var titleNameTextH6 = document.createTextNode(currentPostObj.title)
        // var titlePriceTextH5= document.createTextNode(currentPostObj.price)
        var paraText = document.createTextNode('Gulshan, Karachi');
        para.appendChild(paraText)
        titleName.appendChild(titleNameTextH6)
        titlePrice.appendChild(titlePriceTextH5)

        // MAKE CHILD OF THE PARENT ELEMENT

        cardBody.appendChild(titleName);
        cardBody.appendChild(titlePrice);
        cardBody.appendChild(lineBreak);
        cardBody.appendChild(lineBr);
        cardBody.appendChild(para);

        card.appendChild(createImage);
        card.appendChild(cardBody);

        flexDiv.appendChild(card);

        innerRow.appendChild(flexDiv);
        mainDiv.appendChild(innerRow)
      } else {
        var getLastRow = document.getElementById(rowId)
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


        innerRow.setAttribute('class', 'row p-0 m-0 d-flex justify-content-start')
        flexDiv.setAttribute('class', 'col-12 col-xs-6 col-sm-6 col-md-3 p-1')
        flexDiv.setAttribute('onclick', 'productDes(this);')


        card.setAttribute('class', 'card m-2')
        card.setAttribute('style', 'width:100%;')
        createImage.setAttribute('alt', 'Product Image')
        createImage.setAttribute('class', 'card-img-top')
        createImage.setAttribute('width', 'auto')
        createImage.setAttribute('height', '200vh')
        // createImage.setAttribute('src', './images/car.jpg')



        // createImage.setAttribute('src', currentPostObj.mainImage)
        createImage.setAttribute('src', adPosts[i].mainImage)



        cardBody.setAttribute('class', 'card-body')
        titlePrice.setAttribute('class', 'card-title')

        para.setAttribute('class', 'card-text')

        // CREATE TEXT NODE OF SOME ELEMENT
        // var titleNameTextH6 = document.createTextNode("Kawasaki Ninja ZX-300 REPLICA Bike/ 250cc, 400cc available")
        // var titlePriceTextH5 = document.createTextNode("Rs 199,00000")
        var titleNameTextH6 = document.createTextNode(adPosts[i].title)
        var titlePriceTextH5 = document.createTextNode("Rs " + adPosts[i].price)
        var paraText = document.createTextNode('Gulshan, Karachi');
        para.appendChild(paraText)
        titleName.appendChild(titleNameTextH6)
        titlePrice.appendChild(titlePriceTextH5)

        // MAKE CHILD OF THE PARENT ELEMENT

        cardBody.appendChild(titleName);
        cardBody.appendChild(titlePrice);
        cardBody.appendChild(lineBreak);
        cardBody.appendChild(lineBr);
        cardBody.appendChild(para);

        card.appendChild(createImage);
        card.appendChild(cardBody);

        flexDiv.appendChild(card);
        // console.log("else",rowId)
        getLastRow.appendChild(flexDiv);
      }

    }
  }
  else {
    console.log('No Data Found')
  }



  // // Create element of Ad Post 
  // var mainDiv = document.getElementById('adPostDiv');

  // var innerRow = document.createElement('div');
  // var flexDiv = document.createElement('div');

  // var card = document.createElement('div');
  // var createImage = new Image();

  // var cardBody = document.createElement('div');
  // var titleName = document.createElement('h6');
  // var titlePrice = document.createElement('h5');
  // var lineBreak = document.createElement('br');
  // var lineBr = document.createElement('br');
  // var para = document.createElement('p');



  // // SET ATTRIBUTE IN CREATE ELEMENT OF POST


  // innerRow.setAttribute('class', 'row p-0 m-0 d-flex justify-content-start')
  // flexDiv.setAttribute('class', 'col-12 col-xs-6 col-sm-6 col-md-3 p-1')
  // flexDiv.setAttribute('onclick', 'productDes(this);')


  // card.setAttribute('class', 'card m-2')
  // card.setAttribute('style', '100%')
  // createImage.setAttribute('alt', 'Product Image')
  // createImage.setAttribute('class', 'card-img-top')
  // createImage.setAttribute('src', './images/car.jpg')



  // // createImage.setAttribute('src', currentPostObj.mainImage)



  // cardBody.setAttribute('class', 'card-body')
  // titlePrice.setAttribute('class', 'card-title')

  // para.setAttribute('class', 'card-text')

  // // CREATE TEXT NODE OF SOME ELEMENT
  // var titleNameTextH6 = document.createTextNode("Kawasaki Ninja ZX-300 REPLICA Bike/ 250cc, 400cc available")
  // var titlePriceTextH5 = document.createTextNode("Rs 199,00000")
  // // var titleNameTextH6 = document.createTextNode(currentPostObj.title)
  // // var titlePriceTextH5= document.createTextNode(currentPostObj.price)
  // var paraText = document.createTextNode('Gulshan, Karachi');
  // para.appendChild(paraText)
  // titleName.appendChild(titleNameTextH6)
  // titlePrice.appendChild(titlePriceTextH5)

  // // MAKE CHILD OF THE PARENT ELEMENT

  // cardBody.appendChild(titleName);
  // cardBody.appendChild(titlePrice);
  // cardBody.appendChild(lineBreak);
  // cardBody.appendChild(lineBr);
  // cardBody.appendChild(para);

  // card.appendChild(createImage);
  // card.appendChild(cardBody);

  // flexDiv.appendChild(card);

  // innerRow.appendChild(flexDiv);
  // mainDiv.appendChild(innerRow)

}


function productDes(e) {
  var getImageTag = e.getElementsByClassName('card-img-top');
  var getTitleh6 = e.getElementsByTagName('h6');
  var getPriceh5 = e.getElementsByTagName('h5');
  console.log(getImageTag[0].currentSrc)
  console.log(getTitleh6[0].innerText)
  console.log(getPriceh5[0].innerText.slice(3))
  console.log(e)
  var product = {
    mainImage: getImageTag[0].currentSrc,
    title: getTitleh6[0].innerText,
    price: getPriceh5[0].innerText.slice(3)
  }
  sessionStorage.setItem('productDes', JSON.stringify(product))

  window.location.href = './product.html'
}
function showProduct() {
  var mainImage = document.getElementsByClassName('mainImage');
  var secondImage = document.getElementsByClassName('secondImage');
  var thirdImage = document.getElementsByClassName('thirdImage');

  var priceName = document.getElementsByClassName('priceName');
  var titleName = document.getElementById('titleName');
  var description = document.getElementById('description');


  var a = sessionStorage.getItem('productDes');
  var product = JSON.parse(a);
  var getdata = localStorage.getItem('totalData');
  var totalData = JSON.parse(getdata);
  var totalPosts = totalData[0].adPosts;
  for (var i = 0; i < totalPosts.length; i++) {
    if (product.title === totalPosts[i].title && product.price === totalPosts[i].price && product.mainImage === totalPosts[i].mainImage) {
      console.log(i, totalPosts[i])
      for (var j = 0; j < mainImage.length; j++) {
        // mainImage[i].setAttribute('src', 'https://ag-spots-2017.o.auroraobjects.eu/2017/10/06/bugatti-chiron-c826706102017230956_4.jpg');
        // secondImage[i].setAttribute('src', 'https://www.bugatti.com/fileadmin/_processed_/9/5/csm_HEADER_22de7ed3a8.jpg');
        // thirdImage[i].setAttribute('src', 'https://ag-spots-2017.o.auroraobjects.eu/2017/10/06/bugatti-chiron-c826706102017230956_4.jpg');
        mainImage[j].setAttribute('src', totalPosts[i].mainImage);
        secondImage[j].setAttribute('src', totalPosts[i].img1);
        thirdImage[j].setAttribute('src', totalPosts[i].img2);
        priceName[j].innerHTML = 'Rs ' + totalPosts[i].price;
      }
      titleName.innerHTML = totalPosts[i].title;
      description.innerHTML = totalPosts[i].title;

      break;
    } else {
      // alert("No Ad Post Found In our Data Base")
      console.log(product.title)
      console.log(totalPosts[i].title)

      console.log(product.price)
      console.log(totalPosts[i].price)

      console.log(product.mainImage)
      console.log(totalPosts[i].mainImage)
    }
    // console.log(totalPosts[i])
  }



}

function logOut() {
  var a = sessionStorage.getItem('currentUser');
  var currUser = JSON.parse(a)
  var b = localStorage.getItem('totalData');
  var totalData = JSON.parse(b);
  var users = totalData[0].users;
  for (var i = 0; i < users.length; i++) {
    if(currUser[0].email === users[i].email && currUser[0].pass === users[i].pass){
      // console.log(users[i]);
      // console.log('fayyaz')
      totalData[0].users[i].flag = 'true';
      window.location.href = 'login.html'
      break;
    }
    else{
      console.log('current User : ',currUser)
      console.log('Total Users : ', users)
      
    }
  }
  console.log(users)
  console.log(totalData)
  localStorage.setItem("totalData", JSON.stringify(totalData))
}




















