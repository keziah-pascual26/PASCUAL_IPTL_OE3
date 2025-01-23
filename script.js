

//Append close button to the content
storyViewerContent.appendChild(closeButton);

if (story.type === 'image') {
    const img = document.createElement('img');
    img.src = story.src;
    storyViewerContent.appendChild(img);
    updateProgressBar(5000, () => showStory(index +1));
} else if (story.type === 'video') {
    const video = document.createElement('video');
    video.src = story.src;
    video.autoplay = true;
    storyViewerContent.appendChild(video);
    video.onloadedmetadata = () => {
        updateProgressBar(15000, () => showStory(index + 1));
    };
}

storyViewer.classList.add('active');

}
function updateProgressBar(duration, callback) {
    //Ensure you have a progressBar element in your HTML
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = '0%';
    progressBar.style.transition = 'none';

    requestAnimationFrame() => {
        progressBar.style.transition = `width ${duration}ms linear`;
        progressBar.style.width = '100%';

        //Trigerr the callback after the animation duration
        setTimeout(() => {
            if (typeof callback === 'function') {
                callback();
            }
        }, duration);
    });
}