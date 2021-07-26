
var instance = new vidbg(
    ".video",
    {
      mp4: "video/black.mp4", // URL or relative path to MP4 video
      webm: "video/black.webm", // URL or relative path to webm video
     // poster: "path/to/fallback.jpg", // URL or relative path to fallback image
      overlay: true, // Boolean to display the overlay or not
     // overlayColor: "black", // The overlay color as a HEX
      overlayAlpha: 0.5, // The overlay alpha. Think of this as the last integer in RGBA()
        
    },
  );

//anchors pages
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    });
}

