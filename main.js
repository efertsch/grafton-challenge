// Option 1:
// 1. Select banner Element
// 2. Set initial height of banner element to full viewport height
// 3. After 1 second, transition the banner to its intended height 

var banner = document.querySelector('.banner');

function setBannerHeight(height) {
    banner.style.height = height;
}

function transitionBanner(){
    setTimeout(function(){ 
        setBannerHeight('50vh');
    }
    , 1000);
}
setBannerHeight('100vh');
transitionBanner();




// Improvements if I had more time:
// - Transition the banner using fade effect and css key frames or custom transition class
// - Implement ES6 arrow functions / syntax
// - Add React to the project 