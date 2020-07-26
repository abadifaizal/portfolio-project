// Unsplash API url
let count = 10;
const apiKey = 'jeEKrxjPq1oEalIBEmmbbfGQN_LTeFA_y1ClbY4b8SA';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get element from dom
const imageContainer = document.querySelector('#image-container');
let photosArray = [];

// loaded variable
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
const loader = document.querySelector('#loader');

// check if all images were loaded
function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        count = 5;
        apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    }
}

// function Helper
function setAttributes(element, attributes){
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create function display photos, for link & photos, add to DOM
function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        // Event listener, check when each is finished loading
        img.addEventListener('load', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // call the display photos function
        displayPhotos();
    } catch (error) {
        // Catch Error
        const errorText = document.querySelector('.error');
        errorText.hidden = false;
        loader.hidden = true;
    }
}

// Check to see if scrolling near bottom page, load more photo
window.addEventListener('scroll', function(){
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
})

// on load
getPhotos();