'use strict';

function getProfileData() {
  var dataArray = null;

  $.ajax({

    // Our sample url to make request 
    url:
      'https://script.google.com/macros/s/AKfycbxWTYNyp4R824SgABa5qTEsx-t6v5tDdNvjAJWxBO-fl3ycghAnyqttWL8XjMf3-FF-/exec',
      

    // Type of Request
    type: "GET",


    // Function to call when to
    // request is ok 
    success: function (data) {
      dataArray = data;
      dataArray.data.forEach(r => {

        var img = document.createElement('img');
     
        img.setAttribute("width",r[4]);
        img.setAttribute("alt", r[1])
        img.setAttribute("src", "" + r[3]);


        var contentinfo_name = document.createElement('h1');
        contentinfo_name.setAttribute("class", "name");
        contentinfo_name.setAttribute("title", r[1]);
        contentinfo_name.innerHTML = r[1];

        var contentinfo_title = document.createElement('p');
        contentinfo_title.setAttribute("class", "title");
      
        contentinfo_title.innerHTML = r[7];

        var contactItem_email_ahref = document.createElement('a');
        contactItem_email_ahref.setAttribute("href", "mailto:" + r[6]);
        contactItem_email_ahref.setAttribute("class", "contact-link");
        contactItem_email_ahref.innerHTML = r[6];

        var contactItem_address = document.createElement('address');
        contactItem_address.innerHTML = r[8];


        var about_me_text = document.createElement('p');
        about_me_text.innerHTML = r[9];





      

      

        document.getElementById('profile-avator-box').appendChild(img);
        document.getElementById('profile-info-content').appendChild(contentinfo_name);
        document.getElementById('profile-info-content').appendChild(contentinfo_title);
        document.getElementById('contact-info-email').appendChild(contactItem_email_ahref);
        document.getElementById('contact-info-location').appendChild(contactItem_address);
        document.getElementById('about-text-id').appendChild(about_me_text);
       


      })




    },

    // Error handling 
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });
}


function getSocialLinksData(){
  var dataArray = null;
  $.ajax({

    // Our sample url to make request 
    url:
      'https://script.googleusercontent.com/macros/echo?user_content_key=E8cu0nF0u5N3qwKJgG09dEdVuiFBY_9EGdGXS1zpUxCjE3lxvTbkaBeYvjCUkMmOGFCgfyg2o-l1dp1UUxjobwDazGNS2M4Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFM3h8wipMvH0NpF0_KIe7KNRXe1tVfmWrz2GfEXP-wgi1-Qe-YK44Rc_197Sb4rp18oon9BmdPhzOJ5P3dtRr0zvZqvJow14dz9Jw9Md8uu&lib=Miii1NlSV5bEF23ZU3vAVZPfxkiex_bUK',
      

    // Type of Request
    type: "GET",


    // Function to call when to
    // request is ok 
    success: function (data) {
      dataArray = data;
      dataArray.data.forEach(r => {

        var social_item = document.createElement('li');
        social_item.setAttribute("class", "social-item");
        var social_item_link = document.createElement("a");
        social_item_link.setAttribute("href", r[4]);
        social_item_link.setAttribute("class", "social-link");
        var social_item_icon = document.createElement("i");
        social_item_icon.setAttribute("class", r[2]);

        social_item_link.appendChild(social_item_icon);
        social_item.appendChild(social_item_link);
      

        document.getElementById('social-list-items').appendChild(social_item);
     
       


      })




    },

    // Error handling 
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });

}


function getSubmissionData(){
  var dataArray = null;
  $.ajax({

    // Our sample url to make request 
    url:
      'https://script.google.com/macros/s/AKfycbwTj48rvP6vClgvhqU0ErOQ4BBDQv4oJursmLVBxlFvSSnMQ0MnJV4ZQgTbxHbj0IDVxw/exec',
      

    // Type of Request
    type: "GET",


    // Function to call when to
    // request is ok 
    success: function (data) {
      dataArray = data;
      dataArray.data.forEach(r => {

        if(r[7].toLowerCase() === "review" && r[8] == true){

          var testimonials_item = document.createElement('li');
          testimonials_item.setAttribute("class", "testimonials-item");
          var testimonals_contact_card = document.createElement("div");
          testimonals_contact_card.setAttribute("id", "data-testimonials-item");
          testimonals_contact_card.setAttribute("class", "content-card");
  
          var testimonals_avator_box = document.createElement("figure");
          testimonals_avator_box.setAttribute("class", "testimonials-avatar-box");
  
          var testimonals_avator_style = document.createElement("span");
          testimonals_avator_style.style.fontSize = r[5];
          testimonals_avator_style.style.color = r[4];
          testimonals_avator_style.setAttribute('alt', r[1]);
          testimonals_avator_style.setAttribute('id', 'data-testimonials-avatar-style');
  
          var testimonals_avator_icon = document.createElement('i');
          testimonals_avator_icon.setAttribute("class", r[3]);
          testimonals_avator_icon.setAttribute('id', 'data-testimonials-avatar-icon');
  
          var testimonals_title = document.createElement('h4');
          testimonals_title.setAttribute('class','h4 testimonials-item-title' );
          testimonals_title.setAttribute('id', 'data-testimonials-title');
          testimonals_title.innerHTML = r[1];
          
          var testimonals_text = document.createElement('div');
          testimonals_text.setAttribute('class', 'testimonials-text');
          testimonals_text.setAttribute('id', 'data-testimonials-text');
  
          var testimonals_text_paragraph = document.createElement('p');
          testimonals_text_paragraph.innerHTML = r[2];
  
  
          testimonals_text.appendChild(testimonals_text_paragraph);
  
          testimonals_avator_style.appendChild(testimonals_avator_icon);
          testimonals_avator_box.appendChild(testimonals_avator_style);
          testimonals_contact_card.appendChild(testimonals_avator_box);
          testimonals_contact_card.appendChild(testimonals_title);
          testimonals_contact_card.appendChild(testimonals_text);
  
          testimonials_item.appendChild(testimonals_contact_card);
  
  
          document.getElementById("testimonials-list-id").appendChild(testimonials_item);

        }

       


     
       


      })




    },

    // Error handling 
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });

}


function getServiceData(){
  var dataArray = null;

  $.ajax({

    // Our sample url to make request 
    url:
      'https://script.google.com/macros/s/AKfycbyJEMndRXSnseG3Eoj89FYhZGlVZEn8HoNmOynrQkPqPIZKUfqhmuDwslgSaodOTei0/exec',
      

    // Type of Request
    type: "GET",


    // Function to call when to
    // request is ok 
    success: function (data) {
      dataArray = data;
      dataArray.data.forEach(r => {

        var service_item = document.createElement('li');
     
        service_item.setAttribute("class","service-item");
      


        var service_item_icon_box = document.createElement('div');
        service_item_icon_box.setAttribute("class", "service-icon-box");
 
        var service_item_icon_box_style = document.createElement('span');
        service_item_icon_box_style.style.fontSize = r[5];
        service_item_icon_box_style.style.color = r[4];
        service_item_icon_box_style.style.textAlign = "center";

        var service_item_icon_box_icon = document.createElement('i');
        service_item_icon_box_icon.setAttribute("class", r[3]);
        service_item_icon_box_icon.setAttribute("alt", r[1]);
       

        var service_item_content_box = document.createElement('div');
        service_item_content_box.setAttribute("class", "service-content-box");

        var service_item_title = document.createElement("h4");
        service_item_title.setAttribute("class", "h4 service-item-title");
        service_item_title.innerHTML = r[1];

        var service_item_description = document.createElement("p");
        service_item_description.setAttribute("class", "service-item-text");
        service_item_description.innerHTML = r[2];



        service_item_content_box.appendChild(service_item_title);
        service_item_content_box.appendChild(service_item_description);
        service_item_icon_box_style.appendChild(service_item_icon_box_icon);
        service_item_icon_box.appendChild(service_item_icon_box_style);

        service_item.appendChild(service_item_icon_box);
        service_item.appendChild(service_item_content_box);


        document.getElementById("service-list-id").appendChild(service_item);
       

       


      })




    },

    // Error handling 
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });
}



function getClientData(){


  var dataArray = null;
  $.ajax({

    // Our sample url to make request 
    url:
      'https://script.google.com/macros/s/AKfycby6c-ufmXPMjFPmzCl8svuFjIDNw16FuaSVSG3fOPTgiKYJM93XHooV9jriubsY9Baj/exec',
      

    // Type of Request
    type: "GET",


    // Function to call when to
    // request is ok 
    success: function (data) {
      dataArray = data;
      dataArray.data.forEach(r => {

        var client_item = document.createElement('li');
        client_item.setAttribute("class", "client-item");
        var client_item_link = document.createElement("a");
        client_item_link.setAttribute("href", r[4]);
       
        var client_item_logo = document.createElement("img");
        client_item_logo.setAttribute("src", r[3]);
        client_item_logo.setAttribute("alt", r[1]);

         client_item_link.appendChild(client_item_logo);

         client_item.appendChild(client_item_link);

        document.getElementById('client-list-id').appendChild(client_item);
     
       


      })




    },

    // Error handling 
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });
}


function getProductData(){


  var dataArray = null;
  $.ajax({

    // Our sample url to make request 
    url:
      'https://script.google.com/macros/s/AKfycbxwxX_RkZFldvKymxOpfCwS9E9W0kCLSAGsSnneg7YQdxSEsCdHAGMXfg2GqNp4nCFU/exec',
      

    // Type of Request
    type: "GET",


    // Function to call when to
    // request is ok 
    success: function (data) {
      dataArray = data;
      dataArray.data.forEach(r => {

        if(r[9] === true){

        

        var product_post_item = document.createElement('li');
        product_post_item.setAttribute("class", "product-post-item");
       
        var product_item_link = document.createElement("a");
       
       
        var product_banner_box = document.createElement("figure");
        product_banner_box .setAttribute("class", "product-banner-box");
        
        var product_image = document.createElement("img");
        product_image.setAttribute("src", r[6]);
        product_image.setAttribute("alt", r[2]);
        product_image.setAttribute("loading", "lazy");

     


        var product_content = document.createElement("div");
        product_content.setAttribute("class", "product-content");

        var product_meta = document.createElement("div");
        product_meta.setAttribute("class", "product-meta");


        var product_category = document.createElement("p");
        product_category.setAttribute("class", "product-category")
        product_category.innerHTML = r[7];

        var product_span_dot = document.createElement("span");
        product_span_dot.setAttribute("class", "dot");

        var product_time = document.createElement("time");
        product_time.setAttribute("date", r[8]);
        product_time.innerHTML = r[8];

        var product_item_title = document.createElement("h3");
        product_item_title.setAttribute("class", "h3 product-item-title");
       
        product_item_title.innerHTML = r[1];

        var product_item_text = document.createElement("p");
        product_item_text.setAttribute("class", "product-text");
        product_item_text.innerHTML = r[2];

        var product_item_type = document.createElement("p");
        product_item_type.setAttribute("class", "product-text");
        product_item_type.style.display = "none";
        product_item_type.innerHTML = r[7];


        var product_item_message = document.createElement("p");
        product_item_message.setAttribute("class", "product-text");
        product_item_message.style.display = "none";
        product_item_message.innerHTML = r[5];

        if(r[7].toLowerCase() === "free" || r[7].toLowerCase() === "review"){
          product_post_item.setAttribute("id", "data-products-item");
          product_image.setAttribute("id", "data-product-img-src");
          product_item_title.setAttribute("id", "data-product-title");
          product_item_text.setAttribute("id", "data-product-text" );
          product_item_type.setAttribute("id", "data-product-type");
          product_item_message.setAttribute("id", "data-product-message")
  
        }
        else{
          product_item_link.setAttribute("href", r[5]);
        }
      

        product_meta.appendChild(product_category);
        product_meta.appendChild(product_span_dot);
        product_meta.appendChild(product_time);

        product_content.appendChild(product_meta);
        product_content.appendChild(product_item_title);
        product_content.appendChild(product_item_text);
        product_content.appendChild(product_item_type);
        product_content.appendChild(product_item_message);

        product_banner_box.appendChild(product_image);

        product_item_link.appendChild(product_banner_box);
        product_item_link.appendChild(product_content);

        product_post_item.appendChild(product_item_link);













        document.getElementById('product-posts-list-id').appendChild(product_post_item);

      }
     
       


      })




    },

    // Error handling 
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });
}


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


function setUpTestimonials(){
    
  
// testimonials variables 
const testimonialsItem = document.querySelectorAll("#data-testimonials-item");

const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img-style]");
const modelImgIcon = document.querySelector("[data-modal-img-icon]")
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalTime = document.querySelector("[data-modal-time]");

// modal toggle function
const testimonialsModalFunc = function () {

  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  console.log(testimonialsItem[i]);

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.setAttribute("style", this.querySelector("#data-testimonials-avatar-style").getAttribute("style"));
  
    modalImg.setAttribute("alt",this.querySelector("#data-testimonials-avatar-style").getAttribute("alt"));
    modelImgIcon.setAttribute("class", this.querySelector('#data-testimonials-avatar-icon').getAttribute("class"));
    modalTitle.innerHTML = this.querySelector("#data-testimonials-title").innerHTML;
    modalText.innerHTML = this.querySelector("#data-testimonials-text").innerHTML;
   
   
    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

}

// product modal variables
const productmodalContainer = document.querySelector("[data-modal-post-container]");
const productmodalCloseBtn = document.querySelector("[data-modal-post-close-btn]");
const productoverlay = document.querySelector("[data-post-overlay]");


const productmodalImg = document.querySelector("[data-modal-post-img-src]");
const productmodalTitle = document.querySelector("[data-modal-post-title]");
const productmodalText = document.querySelector("[data-modal-post-text]");




function setUpProducts() {
  const productItems = document.querySelectorAll("#data-products-item");



  // modal toggle function
  const productsItemsModalFunc = function () {

    productmodalContainer.classList.toggle("active");
    productoverlay.classList.toggle("active");
  }



// add click event to all modal items
for (let i = 0; i < productItems.length; i++) {



  productItems[i].addEventListener("click", function () {
 
    document.getElementById("product-post-form").style.display = 'block';

    productmodalImg.setAttribute("src", this.querySelector("#data-product-img-src").getAttribute("src"));
  
    productmodalImg.setAttribute("alt",this.querySelector("#data-product-img-src").getAttribute("alt"));
    productmodalImg.setAttribute("loading",'lazy');

    productmodalTitle.innerHTML = this.querySelector("#data-product-title").innerHTML;
    productmodalText.style.color = "white";
    productmodalText.innerHTML = this.querySelector("#data-product-text").innerHTML;
    document.getElementById('product-post-form-type').value = this.querySelector("#data-product-type").innerHTML;

    if(this.querySelector("#data-product-type").innerHTML == "free"){
      document.getElementById('product-post-form-email').style.display = "block";
      document.getElementById('product-post-form-email').required = true;
      document.getElementById('product-post-form-textarea').style.display = "none";
      document.getElementById('product-post-form-textarea-reviews').style.display = "none";
      document.getElementById('product-post-form-textarea').value = this.querySelector("#data-product-message").innerHTML;
    }
      

    if(this.querySelector("#data-product-type").innerHTML == "review"){
      document.getElementById('product-post-form-email').style.display = "none";
      document.getElementById('product-post-form-textarea-reviews').required = true;
      document.getElementById('product-post-form-textarea-reviews').style.display = "block";
    }
    


   
    productsItemsModalFunc();

  });
}


  // add click event to modal close button
  productmodalCloseBtn.addEventListener("click", productsItemsModalFunc);
  productoverlay.addEventListener("click", productsItemsModalFunc);


}


function waitForElement(selector, callback) {
  const intervalId = setInterval(() => {
    if (document.querySelector(selector)) {
      clearInterval(intervalId);
      callback();
    }
  }, 500);
}

function callWaitForTestimonials(){
  waitForElement("#data-testimonials-item", () => {
    // Element-specific code here
    setUpTestimonials();
  });
}


function callWaitForProducts(){
  waitForElement("#data-products-item", () => {
    // Element-specific code here
    setUpProducts();
  });
  
}






// product form variables
const productForm = document.querySelector("[data-form]");
const productFormInputs = document.querySelectorAll("[data-form-input]");
const productFormBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < productFormInputs.length; i++) {
  productFormInputs[i].addEventListener("input", function () {

    // check form validation
    if (productForm.checkValidity()) {
      productFormBtn.removeAttribute("disabled");
    } else {
      productFormBtn.setAttribute("disabled", "");
    }

  });
}

// product form variables
const contactDataForm = document.querySelector("[contact-data-form]");
const contactDataFormInputs = document.querySelectorAll("[contact-data-form-input]");
const contactDataFormBtn = document.querySelector("[contact-data-form-btn]");

// add event to all form input field
for (let i = 0; i < contactDataFormInputs.length; i++) {
  contactDataFormInputs[i].addEventListener("input", function () {

    // check form validation
    if (contactDataForm.checkValidity()) {
      contactDataFormBtn.removeAttribute("disabled");
    } else {
      contactDataFormBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}




const contactFormScriptURL = 'https://script.google.com/macros/s/AKfycbwTj48rvP6vClgvhqU0ErOQ4BBDQv4oJursmLVBxlFvSSnMQ0MnJV4ZQgTbxHbj0IDVxw/exec'
const contactForm = document.forms['contact-message-form']

contactForm.addEventListener('submit', e => {
  
  document.getElementById("loading").setAttribute("class", "loading-overlay is-active");

  document.getElementById("contact-form-type").value = "contact";

  e.preventDefault();
  fetch(contactFormScriptURL, { method: 'POST', body: new FormData(contactForm) })
  .then(response => response.json().then(data => {
    

    productmodalContainer.classList.toggle("active");
    productoverlay.classList.toggle("active");
    document.getElementById("loading").setAttribute("class", "loading-overlay");
    document.getElementById("product-post-form").style.display = 'none';

    document.getElementById("contact-form-fullname").value = "";
    var email = document.getElementById("contact-form-email").value;
    document.getElementById("contact-form-email").value = "";
    document.getElementById("contact-form-type").value = "";
    document.getElementById('contact-form-message').value = "";
   
  
  
  
  
    productmodalText.style.color = "white";
    productmodalText.innerHTML = "";
    
    if (data.result == "success") {
  
      productmodalTitle.innerHTML = "Success!";
    
        productmodalText.innerHTML = "Thank you for contacting us, we will get back to you soon.";
      
     

   
    }
    else{
      productmodalTitle.innerHTML = "Failed!";
      productmodalText.innerHTML = "There was an issue with your request.";
    }

   
  
    

  }

  ))
  .catch(error => {
    
    productmodalTitle.innerHTML = "Failed!";
    productmodalText.innerHTML = "There was an issue with your request. ";

  })


});





const productFormScriptURL = 'https://script.google.com/macros/s/AKfycbwTj48rvP6vClgvhqU0ErOQ4BBDQv4oJursmLVBxlFvSSnMQ0MnJV4ZQgTbxHbj0IDVxw/exec'

const productform = document.forms['product-post-form']

productform.addEventListener('submit', e => {

  document.getElementById("loading").setAttribute("class", "loading-overlay is-active");
  productmodalContainer.classList.toggle("active");
  productoverlay.classList.toggle("active");
  


 
  
  e.preventDefault()
  fetch(productFormScriptURL, { method: 'POST', body: new FormData(productform) })
    .then(response => response.json().then(data => {
      

      productmodalContainer.classList.toggle("active");
      productoverlay.classList.toggle("active");
      document.getElementById("loading").setAttribute("class", "loading-overlay");
      document.getElementById("product-post-form").style.display = 'none';
      document.getElementById("product-post-form-fullname").value = "";
      var email = document.getElementById("product-post-form-email").value;
      document.getElementById("product-post-form-email").value = "";
      document.getElementById("product-post-form-email").required = false;
      var type = document.getElementById('product-post-form-type').value;
      document.getElementById("product-post-form-textarea").value = "";
      document.getElementById("product-post-form-textarea").required = false;
      document.getElementById('product-post-form-type').value = "";
      document.getElementById("product-post-form-textarea-reviews").value = "";
      document.getElementById("product-post-form-textarea-reviews").required = false;
    
    
      productmodalText.style.color = "white";
      productmodalText.innerHTML = "";
      
      if (data.result == "success") {
    
        productmodalTitle.innerHTML = "Success!";
        if(type.toLowerCase() == "free"){
          productmodalText.innerHTML = "Thank you! We've sent you the product to your email " + email;
        }
        if(type.toLowerCase() == "review"){
          productmodalText.innerHTML = "Thank you for your review! ";
        }
       

     
      }
      else{
        productmodalTitle.innerHTML = "Failed!";
        productmodalText.innerHTML = "There was an issue with your request.";
      }

     
    
      

    }

    ))
    .catch(error => {
      
      productmodalTitle.innerHTML = "Failed!";
      productmodalText.innerHTML = "There was an issue with your request.";

    })
    
    
})


//onload

window.onload = function () {

  getProfileData();
  getSocialLinksData();
  getServiceData();
  getSubmissionData();
  getClientData();
  getProductData();
  callWaitForProducts();
  callWaitForTestimonials();


  
 

};
