height="604"

function upDate(previewPic){
  
  document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
  
  document.getElementById('image').innerText = previewPic.alt;
}

function unDo(){
  document.getElementById('image').style.backgroundImage = 'url(' + image.src + ')';

  document.getElementById('image').innerText;
  
}


function initialize() {
  console.log("Page has loaded and initialize() function is called.");
  
  
  let images = document.querySelectorAll('.preview');
  

  images.forEach((image, index) => {
    image.addEventListener('focus', () => upDate(image));
    image.addEventListener('blur', () => unDo());
    console.log(`Added focus and blur listeners to image ${index}`);
  });
}