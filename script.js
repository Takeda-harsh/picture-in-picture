const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream and pass to video element
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		console.log('whoops, error here:', error);
	}
}

button.addEventListener('click', async () => {
	// Disable button
	button.disabled = true;
	// start Picture in Picture
	await videoElement.requestPictureInPicture();
	// Reset BUtton
	button.disabled = false;
});
selectMediaStream();
