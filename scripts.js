import meditations from './meditations.json' assert {type: "json"};

// General Items
const modeButton = document.querySelector('.mode');
const body = document.querySelector('body');
const header = document.querySelector('#header nav');
const headerIcon = document.querySelector('#header i');
const headerLinks = document.querySelectorAll('#header nav a');
const footer = document.querySelector('#footer');
const footerLinks = document.querySelectorAll('#footer i');

// Landing Items
const main = document.querySelector('main .welcoming p');
const mainTitle = document.querySelectorAll('main .content h2');
const mainLinks = document.querySelectorAll('main .content a');

// Story/Meditation Items
const ad = document.querySelector('.advertisement');
const CloseAd = document.querySelector('.close');
const meditation = document.querySelector('.meditation');
let lightMode = localStorage.getItem('lightMode') === 'true';

// Advertisement
if (location.href.includes('meditations.html') || location.href.includes('historia.html')) {
  CloseAd.addEventListener('click', function() {
    ad.style.display = 'none';
  });
}

function applyColors() {
  const darkColors = {
    body: '#4A5759',
    header: '#DEDBD2',
    icon: '#4A5759',
    links: '#4A5759',
    buttonBg: '#DEDBD2',
    buttonColor: '#4A5759',
    footer: '#DEDBD2',
    mainText: '#f3ccf9',
    linkBg: '#f3ccf9',
    linkColor: '#4A5759',
    ad: '#DEDBD2'
  };

  const lightColors = {
    body: '#DEDBD2',
    header: '#4A5759',
    icon: '#DEDBD2',
    links: '#DEDBD2',
    buttonBg: '#4A5759',
    buttonColor: '#DEDBD2',
    footer: '#4A5759',
    mainText: '#BA8990',
    linkBg: '#BA8990',
    linkColor: '#F7E1D7',
    ad: '#4A5759'
  };

  const colors = lightMode ? lightColors : darkColors;

  body.style.backgroundColor = colors.body;
  header.style.backgroundColor = colors.header;
  headerIcon.style.color = colors.icon;
  headerLinks.forEach(link => (link.style.color = colors.links));
  modeButton.style.backgroundColor = colors.buttonBg;
  modeButton.style.color = colors.buttonColor;
  footer.style.color = colors.footer;
  footerLinks.forEach(link => (link.style.color = colors.footer));

  if (!location.href.includes('meditations.html') && !location.href.includes('historia.html')) {
    main.style.color = lightMode ? lightColors.mainText : darkColors.mainText;
    mainTitle.forEach(title => (title.style.color = main.style.color));
    mainLinks.forEach(link => {
      link.style.backgroundColor = lightMode ? lightColors.linkBg : darkColors.linkBg;
      link.style.color = lightMode ? lightColors.linkColor : darkColors.linkColor;
    });
  } else {
    if ((location.href.includes('meditations.html') || location.href.includes('historia.html')) && ad != null && meditation != null) {
      ad.style.backgroundColor = lightMode ? lightColors.linkBg : darkColors.linkBg;
      ad.style.color = lightMode ? lightColors.linkColor : darkColors.linkColor;
      meditation.style.color = lightMode ? lightColors.linkBg : darkColors.linkBg;
    }
  }
}

function toggleDarkMode() {
  // Toggle the mode
  lightMode = !lightMode;

  // Store the current light mode state in local storage
  localStorage.setItem('lightMode', lightMode);

  // Apply the colors
  applyColors();
}

modeButton.addEventListener('click', toggleDarkMode);

// Apply the colors when the page loads
applyColors();

// Gets the currently URL
let urlActual = window.location.href;

// Gets the query from the URL
let cadenaConsulta = window.location.search;

// Creates an object URLSearchParams from the query string
let parametros = new URLSearchParams(cadenaConsulta);

// Obtain the value
let title = parametros.get("title");
addInformation(title, meditations);

function addInformation(title, meditations){

  // Runs across the Information List
  for (let meditation in meditations) {
    // console.log('entra');
    
    // Checks the comparison between story titles
    if (title == meditations[meditation]["title"]) {
      // console.log('entra if');
      
      document.title = meditations[meditation]["title"];
      getDataFromTxt(meditations[meditation]["text"], '.text-description');
      
      // Injects the HTML code using the dictionary
      const story = document.querySelector('#story');
      story.innerHTML = `<h2> ${meditations[meditation]["title"]} </h2> <br>
                        <p class="text-description"> </p>`;
    }
    // return
  }
}

function getDataFromTxt(path, className) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', path, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const texto = document.querySelector(className);
      texto.innerHTML = xhttp.responseText;
    }
  }
}