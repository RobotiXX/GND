// // Fetch the coordinates from the JSON file
// fetch('coordinates.json')
//     .then(response => response.json())
//     .then(data => {
//         const redCrosses = data.redCrosses;
//         const pinkCrosses = data.pinkCrosses;

//         // Add red crosses
//         redCrosses.forEach((coord, index) => {
//             let redCross = document.createElement('div');
//             redCross.className = 'red-cross';
//             redCross.style.position = 'absolute';
//             redCross.style.top = `${coord.y}px`;  // Use the y-coordinate
//             redCross.style.left = `${coord.x}px`;  // Use the x-coordinate
//             redCross.innerHTML = '&#10006;';  // Cross symbol
//             document.getElementById('map-container').appendChild(redCross);

//             // Add click event for red cross
//             redCross.addEventListener('click', function() {
//                 displayMedia(index, 'red');
//             });
//         });

//         // Add pink crosses
//         pinkCrosses.forEach((coord, index) => {
//             let pinkCross = document.createElement('div');
//             pinkCross.className = 'pink-cross';
//             pinkCross.style.position = 'absolute';
//             pinkCross.style.top = `${coord.y}px`;  // Use the y-coordinate
//             pinkCross.style.left = `${coord.x}px`;  // Use the x-coordinate
//             pinkCross.innerHTML = '&#10006;';  // Cross symbol
//             document.getElementById('map-container').appendChild(pinkCross);

//             // Add click event for pink cross
//             pinkCross.addEventListener('click', function() {
//                 displayMedia(index, 'pink');
//             });
//         });
//     })
//     .catch(error => console.error('Error loading coordinates:', error));

// // Function to display media when a cross is clicked
// function displayMedia(index, type) {
//     let display = document.getElementById('media-display');
//     display.innerHTML = '';  // Clear previous content

//     if (type === 'red') {
//         // Create an image element for the RGB image
//         let rgbImg = document.createElement('img');
//         rgbImg.src = mediaCache.rgbImages[index];  // Path to the corresponding RGB image
//         rgbImg.alt = 'RGB Image';
//         rgbImg.style.width = '400px';
//         rgbImg.style.height = 'auto';
//         rgbImg.style.objectFit = 'contain';

//         // Create an image element for the 360 image
//         let threesixtyImg = document.createElement('img');
//         threesixtyImg.src = mediaCache.threesixtyImages[index];  // Path to the corresponding 360 image
//         threesixtyImg.alt = '360 Image';
//         threesixtyImg.style.width = '400px';
//         threesixtyImg.style.height = 'auto';
//         threesixtyImg.style.objectFit = 'contain';

//         // Add both images to the media display container
//         display.appendChild(rgbImg);
//         display.appendChild(threesixtyImg);
//     } else if (type === 'pink') {
//         // For pink crosses, display the video
//         let video = document.createElement('video');
//         video.src = mediaCache.videos[index];
//         video.controls = true;
//         video.autoplay = true;
//         video.style.width = '400px';
//         video.style.height = 'auto';
//         video.style.objectFit = 'contain';

//         // Add the video to the media display container
//         display.appendChild(video);
//     }
// }



// // Load the JSON file with coordinates
// fetch('coordinates.json')
//     .then(response => response.json())
//     .then(data => {
//         const redCrosses = data.redCrosses;
//         const pinkCrosses = data.pinkCrosses;

//         // Add red stars
//         redCrosses.forEach((coord, index) => {
//             let redStar = document.createElement('div');
//             redStar.className = 'red-star';
//             redStar.style.top = `${coord.y}px`;
//             redStar.style.left = `${coord.x}px`;
//             redStar.innerHTML = '&#9733;';  // Unicode for a solid star
//             document.getElementById('map-container').appendChild(redStar);

//             // Click event for red stars
//             redStar.addEventListener('click', function() {
//                 displayMedia(index, 'red');
//             });
//         });

//         // Add pink stars
//         pinkCrosses.forEach((coord, index) => {
//             let pinkStar = document.createElement('div');
//             pinkStar.className = 'pink-star';
//             pinkStar.style.top = `${coord.y}px`;
//             pinkStar.style.left = `${coord.x}px`;
//             pinkStar.innerHTML = '&#9733;';  // Unicode for a solid star
//             document.getElementById('map-container').appendChild(pinkStar);

//             // Click event for pink stars
//             pinkStar.addEventListener('click', function() {
//                 displayMedia(index, 'pink');
//             });
//         });
//     })
//     .catch(error => console.error('Error loading coordinates:', error));

// // Function to display media when a cross is clicked
// function displayMedia(index, type) {
//     let display = document.getElementById('media-display');
//     display.innerHTML = '';  // Clear previous content

//     if (type === 'red') {
//         // Create an image element for the RGB image (50px by 50px)
//         let rgbImg = document.createElement('img');
//         rgbImg.src = mediaCache.rgbImages[index];  // Path to the corresponding RGB image
//         rgbImg.alt = 'RGB Image';

//         // Create an image element for the 360 image (50px by 50px)
//         let threesixtyImg = document.createElement('img');
//         threesixtyImg.src = mediaCache.threesixtyImages[index];  // Path to the corresponding 360 image
//         threesixtyImg.alt = '360 Image';

//         // Add both images to the media display container
//         display.appendChild(rgbImg);
//         display.appendChild(threesixtyImg);
//     } else if (type === 'pink') {
//         // For pink stars, display the video
//         let video = document.createElement('video');
//         video.src = mediaCache.videos[index];
//         video.controls = true;
//         video.autoplay = true;

//         // Add the video to the media display container
//         display.appendChild(video);
//     }
// }

// Load the JSON file with coordinates
fetch('coordinates.json')
    .then(response => response.json())
    .then(data => {
        const redCrosses = data.redCrosses;
        const pinkCrosses = data.pinkCrosses;

        // Add red stars
        redCrosses.forEach((coord, index) => {
            let redStar = document.createElement('div');
            redStar.className = 'red-star';
            redStar.style.position = 'absolute';
            redStar.style.top = `${coord.y}px`;
            redStar.style.left = `${coord.x}px`;
            redStar.innerHTML = '&#9733;';  // Unicode for a solid star
            document.getElementById('map-container').appendChild(redStar);

            // Mouseover event for red stars to display the image
            redStar.addEventListener('mouseover', function() {
                displayMedia(index, 'red');
            });

            // Mouseleave event to hide the image when mouse leaves the star
            redStar.addEventListener('mouseleave', function() {
                clearMedia();
            });
        });

        // Add pink stars
        pinkCrosses.forEach((coord, index) => {
            let pinkStar = document.createElement('div');
            pinkStar.className = 'pink-star';
            pinkStar.style.position = 'absolute';
            pinkStar.style.top = `${coord.y}px`;
            pinkStar.style.left = `${coord.x}px`;
            pinkStar.innerHTML = '&#9733;';  // Unicode for a solid star
            document.getElementById('map-container').appendChild(pinkStar);

            // Mouseover event for pink stars to display the video
            pinkStar.addEventListener('mouseover', function() {
                displayMedia(index, 'pink');
            });

            // Mouseleave event to hide the video when mouse leaves the star
            pinkStar.addEventListener('mouseleave', function() {
                clearMedia();
            });
        });
    })
    .catch(error => console.error('Error loading coordinates:', error));

// Function to display media when hovering over a star
function displayMedia(index, type) {
    let display = document.getElementById('media-display');
    display.innerHTML = '';  // Clear previous content


    if (type === 'red') {
        // Create an image element for the RGB image
        let rgbImg = document.createElement('img');
        rgbImg.src = mediaCache.rgbImages[index];  // Path to the corresponding RGB image
        rgbImg.alt = 'RGB Image';

        // Create an image element for the 360 image
        let threesixtyImg = document.createElement('img');
        threesixtyImg.src = mediaCache.threesixtyImages[index];  // Path to the corresponding 360 image
        threesixtyImg.alt = '360 Image';

        // Add both images to the media display container
        display.appendChild(rgbImg);
        display.appendChild(threesixtyImg);
    } else if (type === 'pink') {
        // For pink stars, display the video
        let video = document.createElement('video');
        video.src = mediaCache.videos[index];  // Path to the corresponding video
        video.controls = true;
        video.autoplay = true;

        // Add the video to the media display container
        display.appendChild(video);
    }
}

// Function to clear the media display when the mouse leaves the star
function clearMedia() {
    let display = document.getElementById('media-display');
    display.innerHTML = '';  // Clear the display
}




// Pre-cache media
let mediaCache = {
    rgbImages: [
        "rgb/1724701372247768584_rgb.png",
        "rgb/1724701251773303334_rgb.png",
        "rgb/1724701031091859238_rgb.png",
        "rgb/1724700900355742382_rgb.png",
        "rgb/1724855804437617100_rgb.png",
        "rgb/1724855944913112235_rgb.png",
        "rgb/1724856000116629166_rgb.png",
        "rgb/1724856230598678414_rgb.png",
        "rgb/1724857565819500989_rgb.png",
        "rgb/1724857294935468514_rgb.png",
        "rgb/1724857395341811677_rgb.png",
        "rgb/1724857450478418775_rgb.png",
        "rgb/1724859750763419063_rgb.png",
        "rgb/1724859685692536741_rgb.png",
        "rgb/1724859535482662855_rgb.png",
        "rgb/1724859465211773727_rgb.png",
        "rgb/1724858258332026411_rgb.png",
        "rgb/1724858488947303945_rgb.png",
        "rgb/1724858674025715116_rgb.png",
        "rgb/1724858869371921245_rgb.png",
        "rgb/1724697228688272882_rgb.png",
        "rgb/1724696943069753293_rgb.png"

    ],
    threesixtyImages: [
        "360/1724701370425798871_360.png",
        "360/1724701254983045738_360.png",
        "360/1724701038755123135_360.png",
        "360/1724700908292871393_360.png",
        "360/1724855804895965376_360.png",
        "360/1724855945378819125_360.png",
        "360/1724856000492660190_360.png",
        "360/1724856231127438823_360.png",
        "360/1724857565694076169_360.png",
        "360/1724857294609690170_360.png",
        "360/1724857395173221691_360.png",
        "360/1724857450366671161_360.png",
        "360/1724859750916560267_360.png",
        "360/1724859685840251540_360.png",
        "360/1724859535418726225_360.png",
        "360/1724859465277882239_360.png",
        "360/1724858259260365331_360.png",
        "360/1724858485152118765_360.png",
        "360/1724858675751081146_360.png",
        "360/1724858881551809941_360.png",
        "360/360_image.png",
        "360/360_image1.png" 
        
        // Add paths to 100 360 images here
    ],
    videos: [
        "videos/IMG_6709.mov", 
        "videos/IMG_6696.mov", 
        "videos/IMG_6680.mov"
    ]
};
