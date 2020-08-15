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
