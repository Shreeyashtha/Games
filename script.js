// // Create confetti elements
// function createConfetti() {
//   const colors = ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#e040fb', '#ff9800'];
//   for (let i = 0; i < 50; i++) {
//     const confetti = document.createElement('div');
//     confetti.className = 'confetti';
//     confetti.style.left = Math.random() * 100 + 'vw';
//     confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//     confetti.style.width = (Math.random() * 10 + 5) + 'px';
//     confetti.style.height = (Math.random() * 10 + 5) + 'px';
//     confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
//     confetti.style.animationDelay = (Math.random() * 5) + 's';
//     document.body.appendChild(confetti);
//   }
// }
// window.onload = createConfetti;

// const wheel = document.getElementById("wheel");
// const spinBtn = document.getElementById("spin-btn");
// const finalValue = document.getElementById("final-value");

// // Object that stores values of minimum and maximum angle for a value
// const rotationValues = [
//   { minDegree: 0, maxDegree: 60, value: 2 },
//   { minDegree: 61, maxDegree: 120, value: 1 },
//   { minDegree: 121, maxDegree: 180, value: 6 },
//   { minDegree: 181, maxDegree: 240, value: 5 },
//   { minDegree: 241, maxDegree: 300, value: 4 },
//   { minDegree: 301, maxDegree: 360, value: 3 },
// ];

// // Size of each piece
// const data = [16, 16, 16, 16, 16, 16];

// // Background color for each piece - bright colors for kids
// var pieColors = [
//   "#FF5252", // Red
//   "#FFEB3B", // Yellow
//   "#2196F3", // Blue
//   "#4CAF50", // Green
//   "#E040FB", // Purple
//   "#FF9800", // Orange
// ];

// // Create chart
// let myChart = new Chart(wheel, {
//   // Plugin for displaying text on pie chart
//   plugins: [ChartDataLabels],
//   // Chart Type Pie
//   type: "pie",
//   data: {
//     // Labels(values which are to be displayed on chart)
       
//     labels: [
//       "Indra Jatra",
//       "Holi",
//       "Chhath Puja",
//       "Losar",
//       "Gai Jatra",
//       "Rato Machhindranath"
//     ],
//     // Descriptions for each festival
//     description: [
//       "Indra Jatra is one of the biggest festivals in Kathmandu. It's celebrated for eight days with the raising of a wooden pole called Yosin at Kathmandu Durbar Square. During this festival, you can see masked dances and the chariot of Kumari, the living goddess!",
//       "Holi is the colorful festival of Spring where people throw colored powders and water at each other! This joyful celebration symbolizes the victory of good over evil and the arrival of spring. It's full of music, dancing, and delicious sweets!",
//       "Chhath Puja is a beautiful festival dedicated to the Sun God and Chhathi Maiya. Devotees fast and stand in water bodies offering prayers to the setting and rising sun. The riverbanks are decorated with oil lamps and colorful offerings!",
//       "Losar is the Tibetan New Year celebrated in the mountain regions of Nepal. People clean their houses, make special dumplings called 'momo', and perform colorful mask dances. They also create beautiful sand mandalas and butter sculptures!",
//       "Gai Jatra (the Festival of Cows) is celebrated to remember family members who died during the year. Children dress up and parade through the streets, often wearing funny costumes and cow masks. There's lots of laughter, jokes, and funny plays!",
//       "Rato Machhindranath is a chariot festival where a huge wooden chariot carrying the god Machhindranath is pulled through the streets of Lalitpur. The festival celebrates the rain god and is held to ensure good rainfall and harvest!"
//     ],
//     celebratedBy: [
//       "Primarily Hindu communities, especially Brahmin, Chhetri, and Newar",
//       "Celebrated by all communities across Nepal and especially in Terai region",
//       "Primarily in Terai region, especially by Maithili communities",
//       "Sherpa, Tamang, Gurung, and other Tibetan Buddhist communities",
//       "Hindu communities, especially in Kathmandu Valley",
//       "Primarily by Newar community in Kathmandu Valley"
//     ],
//     province: [
//       "All provinces, but especially Province 1, Bagmati, and Gandaki",
//       "Celebrated throughout Nepal, especially in Madhesh Province and Terai regions",
//       "Primarily in Province 2 (Madhesh Province) and bordering areas",
//       "Province 1 and Gandaki Province, especially mountainous regions",
//       "Widespread, but especially in Kathmandu Valley",
//       "Bagmati Province, particularly Kathmandu Valley"
//     ],
//     // Video URLs for each festival
//     videoLinks: [
//       "https://www.youtube.com/watch?v=gw4120N1i7I", // Indra Jatra
//       "https://www.youtube.com/watch?v=qhD8rGgjoGk", // Holi
//       "https://www.youtube.com/watch?v=WgUzslnYLBI", // Chhath Puja
//       "https://www.youtube.com/watch?v=wyMQHGEGVd8", // Losar
//       "https://www.youtube.com/watch?v=XM_J2t75Ug8&t=1s", // Gai Jatra
//       "https://www.youtube.com/watch?v=bmgia-h1qNg", // Rato Machhindranath
//     ],
//     // Fun facts for each festival
//     funFacts: [
//       "इन्द्र जात्रामा रातो भैरवको मूर्तिबाट रक्सी बग्छ र यो साँच्चै देवताको आशीर्वाद मानिन्छ! रातो भैरवलाई 'देवताहरूको न्यायाधीश' भनिन्छ।",
//       "होलीलाई 'रंगको पर्व' भनिन्छ! नेपालमा फागु पूर्णिमाको दिन होली मनाइन्छ। पहाडी क्षेत्रमा एक दिन र तराई क्षेत्रमा दुई दिन यो पर्व मनाइन्छ।",
//       "छठ पूजामा सूर्य भगवानलाई अर्घ्य दिने बेलामा घाटमा हजारौं दियाहरू बालिन्छन्, जुन अद्भुत दृश्य हुन्छ! यो पर्व चार दिनसम्म चल्छ।",
//       "लोसारमा मानिसहरू एउटा विशेष सूप खान्छन् जसमा ९ वटा फरक-फरक सामग्रीहरू हुन्छन्! यसलाई 'गुथुक' भनिन्छ र यसले नयाँ वर्षमा सौभाग्य ल्याउँछ।",
//       "गाई जात्राको दिन बाच्छा जस्तो देखिने मान्छेले सबैलाई गुदगुदी गर्छ! यसलाई 'खुसी जात्रा' पनि भनिन्छ किनभने यसको उद्देश्य मानिसहरूलाई हँसाउनु हो।",
//       "रातो मच्छिन्द्रनाथको रथ २४ मिटर अग्लो हुन्छ! यो ठूलो रथ बनाउन ७२ दिन लाग्छ र त्यसमा एउटै पनि किला प्रयोग हुँदैन।"
//     ],
//     // Settings for dataset/pie
//     datasets: [
//       {
//         backgroundColor: pieColors,
//         data: data,
//       },
//     ],
//   },
//   options: {
//     // Responsive chart
//     responsive: true,
//     animation: { duration: 0 },
//     plugins: {
//       // Hide tooltip and legend
//       tooltip: false,
//       legend: {
//         display: false,
//       },
//       // Display labels inside pie chart
//       datalabels: {
//         color: "#ffffff",
//         formatter: (_, context) => context.chart.data.labels[context.dataIndex],
//         font: { size: 16, weight: 'bold' },
//         textShadow: '2px 2px 2px rgba(0,0,0,0.5)'
//       },
//     },
//   },
// });

// // Function to show confetti when festival is selected
// function showCelebration() {
//   // Play a celebration sound
//   const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
//   audio.volume = 0.5;
//   audio.play().catch(e => console.log("Audio play failed:", e));
  
//   // Additional confetti
//   createConfetti();
// }

// // Function to reset and return to the wheel
// function resetWheel() {
//   document.getElementById("resultModal").style.display = "none";
//   // Stop video when modal is closed
//   document.getElementById("modalVideo").src = document.getElementById("modalVideo").src;
// }

// // Function to open tabs
// function openTab(evt, tabName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Display value based on the randomAngle
// const valueGenerator = (angleValue) => {
//   for (let i of rotationValues) {
//     if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
//       // Get index for data access
//       const festivalIndex = i.value - 1;
      
//       // Dynamically set heading, image, video, description, and new fields
//       document.getElementById("modalHeading").innerHTML = `${
//         myChart.data.labels[festivalIndex]
//       }`;
//       // document.getElementById("modalImage").src = `./images/`;
//       document.getElementById("modalImage").src = `./images/${
//         myChart.data.labels[festivalIndex]
//       }.jpg`;
//       document.getElementById("modalVideo").src = myChart.data.videoLinks[festivalIndex];
//       document.getElementById("modalDescription").innerHTML = `${
//         myChart.data.description[festivalIndex]
//       }`;
//       document.getElementById("celebratedBy").innerHTML = `${
//         myChart.data.celebratedBy[festivalIndex]
//       }`;
//       document.getElementById("province").innerHTML = `${
//         myChart.data.province[festivalIndex]
//       }`;
//       document.getElementById("funFactText").innerHTML = `${
//         myChart.data.funFacts[festivalIndex]
//       }`;

//       // Set tab to image by default
//       document.querySelector(".tablinks.active").classList.remove("active");
//       document.querySelector(".tablinks").classList.add("active");
//       document.getElementById("imageTab").style.display = "block";
//       document.getElementById("videoTab").style.display = "none";

//       // Show celebration effects
//       showCelebration();
      
//       // Display the modal with a short delay for effect
//       setTimeout(() => {
//         document.getElementById("resultModal").style.display = "block";
//       }, 1000);

//       // Change the final-value text
//       finalValue.innerHTML = `<p>You got: ${myChart.data.labels[festivalIndex]}!</p>`;

//       spinBtn.disabled = false;
//       break;
//     }
//   }
// };

// // Modal close functionality
// document.querySelector(".close-btn").onclick = () => {
//   resetWheel();
// };

// window.onclick = (event) => {
//   const modal = document.getElementById("resultModal");
//   if (event.target === modal) {
//     resetWheel();
//   }
// };

// // Spinner count
// let count = 0;
// // 100 rotations for animation and last rotation for result
// let resultValue = 101;

// // Start spinning
// spinBtn.addEventListener("click", () => {
//   spinBtn.disabled = true;
//   // Change final value text while spinning
//   finalValue.innerHTML = `<p>Finding a festival...</p>`;
//   // Generate random degrees to stop at
//   let randomDegree = Math.floor(Math.random() * 356);

//   // Interval for rotation animation
//   let rotationInterval = window.setInterval(() => {
//     // Set rotation for piechart
//     /*
//     Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
//     */
//     myChart.options.rotation = myChart.options.rotation + resultValue;
//     // Update chart with new value;
//     myChart.update();
//     // If rotation>360 reset it back to 0
//     if (myChart.options.rotation >= 360) {
//       count += 1;
//       resultValue -= 5;
//       myChart.options.rotation = 0;
//     } else if (count > 15 && myChart.options.rotation == randomDegree) {
//       valueGenerator(randomDegree);
//       clearInterval(rotationInterval);
//       count = 0;
//       resultValue = 101;
//     }
//   }, 10);
// });


// Create confetti elements
function createConfetti() {
  const colors = ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#e040fb', '#ff9800'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = (Math.random() * 10 + 5) + 'px';
    confetti.style.height = (Math.random() * 10 + 5) + 'px';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = (Math.random() * 5) + 's';
    document.body.appendChild(confetti);
  }
}
window.onload = createConfetti;

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

// Function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(youtubeUrl) {
  // Extract video ID from various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = youtubeUrl.match(regExp);
  
  if (match && match[2].length === 11) {
    // Return the embed URL format with the extracted video ID
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  
  // Return the original URL if no match (though this shouldn't happen with valid URLs)
  return youtubeUrl;
}

// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 60, value: 2 },
  { minDegree: 61, maxDegree: 120, value: 1 },
  { minDegree: 121, maxDegree: 180, value: 6 },
  { minDegree: 181, maxDegree: 240, value: 5 },
  { minDegree: 241, maxDegree: 300, value: 4 },
  { minDegree: 301, maxDegree: 360, value: 3 },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16];

// Background color for each piece - bright colors for kids
var pieColors = [
  "#FF5252", // Red
  "#FFEB3B", // Yellow
  "#2196F3", // Blue
  "#4CAF50", // Green
  "#E040FB", // Purple
  "#FF9800", // Orange
];

// Create chart
let myChart = new Chart(wheel, {
  // Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  // Chart Type Pie
  type: "pie",
  data: {
    // Labels(values which are to be displayed on chart)
       
    labels: [
      "Indra Jatra",
      "Holi",
      "Chhath Puja",
      "Losar",
      "Gai Jatra",
      "Rato Machhindranath"
    ],
    // Descriptions for each festival
    description: [
      "Indra Jatra is one of the biggest festivals in Kathmandu. It's celebrated for eight days with the raising of a wooden pole called Yosin at Kathmandu Durbar Square. During this festival, you can see masked dances and the chariot of Kumari, the living goddess!",
      "Holi is the colorful festival of Spring where people throw colored powders and water at each other! This joyful celebration symbolizes the victory of good over evil and the arrival of spring. It's full of music, dancing, and delicious sweets!",
      "Chhath Puja is a beautiful festival dedicated to the Sun God and Chhathi Maiya. Devotees fast and stand in water bodies offering prayers to the setting and rising sun. The riverbanks are decorated with oil lamps and colorful offerings!",
      "Losar is the Tibetan New Year celebrated in the mountain regions of Nepal. People clean their houses, make special dumplings called 'momo', and perform colorful mask dances. They also create beautiful sand mandalas and butter sculptures!",
      "Gai Jatra (the Festival of Cows) is celebrated to remember family members who died during the year. Children dress up and parade through the streets, often wearing funny costumes and cow masks. There's lots of laughter, jokes, and funny plays!",
      "Rato Machhindranath is a chariot festival where a huge wooden chariot carrying the god Machhindranath is pulled through the streets of Lalitpur. The festival celebrates the rain god and is held to ensure good rainfall and harvest!"
    ],
    celebratedBy: [
      "Primarily Hindu communities, especially Brahmin, Chhetri, and Newar",
      "Celebrated by all communities across Nepal and especially in Terai region",
      "Primarily in Terai region, especially by Maithili communities",
      "Sherpa, Tamang, Gurung, and other Tibetan Buddhist communities",
      "Hindu communities, especially in Kathmandu Valley",
      "Primarily by Newar community in Kathmandu Valley"
    ],
    province: [
      "All provinces, but especially Province 1, Bagmati, and Gandaki",
      "Celebrated throughout Nepal, especially in Madhesh Province and Terai regions",
      "Primarily in Province 2 (Madhesh Province) and bordering areas",
      "Province 1 and Gandaki Province, especially mountainous regions",
      "Widespread, but especially in Kathmandu Valley",
      "Bagmati Province, particularly Kathmandu Valley"
    ],
    // Video URLs for each festival
    videoLinks: [
      "https://www.youtube.com/watch?v=gw4120N1i7I", // Indra Jatra
      "https://www.youtube.com/watch?v=qhD8rGgjoGk", // Holi
      "https://www.youtube.com/watch?v=8D91PBBI2TI", // Chhath Puja
      "https://www.youtube.com/watch?v=wyMQHGEGVd8", // Losar
      "https://www.youtube.com/watch?v=XM_J2t75Ug8&t=1s", // Gai Jatra
      "https://www.youtube.com/watch?v=bmgia-h1qNg", // Rato Machhindranath
    ],
    // Fun facts for each festival
    funFacts: [
      "इन्द्र जात्रामा रातो भैरवको मूर्तिबाट रक्सी बग्छ र यो साँच्चै देवताको आशीर्वाद मानिन्छ! रातो भैरवलाई 'देवताहरूको न्यायाधीश' भनिन्छ।",
      "होलीलाई 'रंगको पर्व' भनिन्छ! नेपालमा फागु पूर्णिमाको दिन होली मनाइन्छ। पहाडी क्षेत्रमा एक दिन र तराई क्षेत्रमा दुई दिन यो पर्व मनाइन्छ।",
      "छठ पूजामा सूर्य भगवानलाई अर्घ्य दिने बेलामा घाटमा हजारौं दियाहरू बालिन्छन्, जुन अद्भुत दृश्य हुन्छ! यो पर्व चार दिनसम्म चल्छ।",
      "लोसारमा मानिसहरू एउटा विशेष सूप खान्छन् जसमा ९ वटा फरक-फरक सामग्रीहरू हुन्छन्! यसलाई 'गुथुक' भनिन्छ र यसले नयाँ वर्षमा सौभाग्य ल्याउँछ।",
      "गाई जात्राको दिन बाच्छा जस्तो देखिने मान्छेले सबैलाई गुदगुदी गर्छ! यसलाई 'खुसी जात्रा' पनि भनिन्छ किनभने यसको उद्देश्य मानिसहरूलाई हँसाउनु हो।",
      "रातो मच्छिन्द्रनाथको रथ २४ मिटर अग्लो हुन्छ! यो ठूलो रथ बनाउन ७२ दिन लाग्छ र त्यसमा एउटै पनि किला प्रयोग हुँदैन।"
    ],
    // Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    // Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      // Hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      // Display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 16, weight: 'bold' },
        textShadow: '2px 2px 2px rgba(0,0,0,0.5)'
      },
    },
  },
});

// Function to show confetti when festival is selected
function showCelebration() {
  // Play a celebration sound
  const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
  audio.volume = 0.5;
  audio.play().catch(e => console.log("Audio play failed:", e));
  
  // Additional confetti
  createConfetti();
}

// Function to reset and return to the wheel
function resetWheel() {
  document.getElementById("resultModal").style.display = "none";
  // Properly stop video when modal is closed by clearing the src
  document.getElementById("modalVideo").src = "";
}

// Function to open tabs
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      // Get index for data access
      const festivalIndex = i.value - 1;
      
      // Dynamically set heading, image, video, description, and new fields
      document.getElementById("modalHeading").innerHTML = `${
        myChart.data.labels[festivalIndex]
      }`;
      document.getElementById("modalImage").src = `./images/${
        myChart.data.labels[festivalIndex]
      }.jpg`;
      
      // Convert YouTube URL to embed URL before setting as src
      const embedUrl = getYouTubeEmbedUrl(myChart.data.videoLinks[festivalIndex]);
      document.getElementById("modalVideo").src = embedUrl;
      
      document.getElementById("modalDescription").innerHTML = `${
        myChart.data.description[festivalIndex]
      }`;
      document.getElementById("celebratedBy").innerHTML = `${
        myChart.data.celebratedBy[festivalIndex]
      }`;
      document.getElementById("province").innerHTML = `${
        myChart.data.province[festivalIndex]
      }`;
      document.getElementById("funFactText").innerHTML = `${
        myChart.data.funFacts[festivalIndex]
      }`;

      // Set tab to image by default
      document.querySelector(".tablinks.active").classList.remove("active");
      document.querySelector(".tablinks").classList.add("active");
      document.getElementById("imageTab").style.display = "block";
      document.getElementById("videoTab").style.display = "none";

      // Show celebration effects
      showCelebration();
      
      // Display the modal with a short delay for effect
      setTimeout(() => {
        document.getElementById("resultModal").style.display = "block";
      }, 1000);

      // Change the final-value text
      finalValue.innerHTML = `<p>You got: ${myChart.data.labels[festivalIndex]}!</p>`;

      spinBtn.disabled = false;
      break;
    }
  }
};

// Modal close functionality
document.querySelector(".close-btn").onclick = () => {
  resetWheel();
};

window.onclick = (event) => {
  const modal = document.getElementById("resultModal");
  if (event.target === modal) {
    resetWheel();
  }
};

// Spinner count
let count = 0;
// 100 rotations for animation and last rotation for result
let resultValue = 101;

// Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  // Change final value text while spinning
  finalValue.innerHTML = `<p>Finding a festival...</p>`;
  // Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * 356);

  // Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    // Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    // Update chart with new value;
    myChart.update();
    // If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});