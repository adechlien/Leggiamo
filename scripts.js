// Sets all the information from JS to HTML
document.addEventListener("DOMContentLoaded", function() {
  addHeader();
});


// Adds the header
function addHeader() {
  const header = document.querySelector('#header');
  header.innerHTML = `<i class="fa-solid fa-book-open-reader"></i>
                      <ul>
                      <li> <a href=""> Terror </a> </li>
                          <li> <a href=""> Misterio </a> </li>
                          <li> <a href=""> Romance </a> </li>
                          <li> <a href=""> Humor </a> </li>
                      </ul>`;
}

const imagen = document.querySelector('.enlace');

// Gets the currently URL
var urlActual = window.location.href;

// Gets the query from the URL
var cadenaConsulta = window.location.search;

// Creates an object URLSearchParams from the query string
var parametros = new URLSearchParams(cadenaConsulta);

// Obtain the value
var title = parametros.get("title");

var info1 = {
  title: "Odio la ciudad",
  author: "Nicolás Lara",
  text: "historias/nicolas-lara.txt",
  imgUrl: "nicolas-lara.png",
  description: "descripciones/nicolas-lara.txt"
};
var info2 = {
  title: "Solo queda escapar",
  author: "Nathalia Sánchez",
  text: "historias/nathalia-sanchez.txt",
  imgUrl: "nathalia-sanchez.png",
  description: "descripciones/nathalia-sanchez.txt"
};
var info3 = {
  title: "El trabajo es mi pasión",
  author: "Andrés García Acuña",
  text: "historias/andres-garcia.txt",
  imgUrl: "no-photo.png",
  description: "descripciones/andres-garcia.txt"
};
var info4 = {
  title: "Razas encontradas",
  author: "Javier Pizarro",
  text: "historias/javier-pizarro.txt",
  imgUrl: "no-photo.png",
  description: "descripciones/javier-pizarro.txt"
};
var info5 = {
  title: "Aún me llaman señor",
  author: "Jesús Cristancho",
  text: "historias/jesus-cristancho.txt",
  imgUrl: "no-photo.png",
  description: "descripciones/jesus-cristancho.txt"
};
var infos = [info1, info2, info3, info4, info5];
addInformation(title, infos);

function addInformation(title, infos){

  // Runs across the Information List
  infos.forEach(function(dict) {
    

    // Checks the comparison between story titles
    if (title == dict.title) {

      document.title = dict.title;

      // Story 

      // Searches the correct .txt

      getDataFromTxt(dict.text, '.text-description');
      
      // Injects the HTML code using the dictionary
      const story = document.querySelector('#story');
      story.innerHTML = `<h2> ${dict.title} </h2>
                        <h3> ${dict.author} </h3>
                        <p class="text-description"> </p>`;

      // Description of the Author

      getDataFromTxt(dict.description, '.description');

      const author = document.querySelector('#author');
      author.innerHTML = `<img src="images/${dict.imgUrl}" alt="">
                          <h3> ${dict.author} </h3>
                          <p class="description"> </p>
                          <div>
                              <i class="fa-brands fa-instagram"></i>
                              <i class="fa-brands fa-facebook"></i>
                              <i class="fa-solid fa-envelope"></i>
                          </div>`;
    }
    return
  });
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

  /*var txt = txt;
  var imgUrl = imgUrl;
  var selfDescription = selfDescription;*/