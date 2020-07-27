const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt user to select media stream, pass to video element, then play
// make async func selectMediaStream() width try catch
// use screen capture api

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = function() {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async function() {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// on load
selectMediaStream();