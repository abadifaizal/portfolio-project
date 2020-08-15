const modal = document.querySelector('#modal');
const modalShow = document.querySelector('#show-modal');
const modalClose = document.querySelector('#close-modal');
const bookmarkForm = document.querySelector('#bookmark-form');
const websiteNameEl = document.querySelector('#website-name');
const websiteUrlEl = document.querySelector('#website-url');
const bookmarksContainer = document.querySelector('#bookmarks-container');

// Show modal
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

modalShow.addEventListener('click', showModal);
// Close modal with clicking X logo
modalClose.addEventListener('click', function(){
    modal.classList.remove('show-modal');
});
// Close modal with clicking outside modal box
window.addEventListener('click', function(event){
    if(event.target === modal ? modal.classList.remove('show-modal') : false);
});

// Validate Form
function validate(websiteNameValue, websiteUrlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if(!websiteNameValue || !websiteUrlValue){
        //if website name value == empty or website url value == empty
        alert('Please submit values for both fields.');
        return false;
    }
    if(!websiteUrlValue.match(regex)){
        alert('Please provide a valid web address.');
        return false;
    }
    // if all condition match set value to true
    return true;
}

// Handle data form
function storeBookmark(event){
    event.preventDefault();
    const websiteNameValue = websiteNameEl.value;
    let websiteUrlValue = websiteUrlEl.value;
    // Adding https:// for correct path if there is none
    if(!websiteUrlValue.includes('http://', 'https://')){
        websiteUrlValue = `https://${websiteUrlValue}`;
    }
    console.log(websiteNameValue, websiteUrlValue);
    if(!validate(websiteNameValue, websiteUrlValue)){
        // check if the both website name value and website url value are true, if it doesn't set the value to false and code above will not continue or run;
        return false;
    }
}

bookmarkForm.addEventListener('submit', storeBookmark);