import render from "../modules/render.js";
import apiCall from "../modules/api.js";

function getHtml() {
  let user;
  if (window.location.search) {
    user = window.location.search.split("=").pop();
  }

  return apiCall({
    method: "user.getrecenttracks",
    user: user,
    page: "1"
  }).then(json =>
    json.recenttracks.track
      .map(
        song => `
              <section class="nowPlaying">
                  <a href="#detail/${song.artist["#text"]}/${
          song.name
        }"> <img src="${
          song.image[2]["#text"] ? song.image[2]["#text"] : "../docs/img/174.png"
        }"></a>
                <div>
                  <h2>${song.name}</h2>
                  <p>${song.artist["#text"]}</p>
                  <p>${song.date ? song.date["#text"] : "Now Playing"}</p>
                </div>
              </section>
                `
      )
      .join("")
  );
}

function renderTemplate() {
  render.loadingState();
  getHtml().then(htmlTemplate => render.template(htmlTemplate));
}

// user input search 
document.getElementById('inputUser').addEventListener('submit', function(e) {
    e.preventDefault()
    const userInput = this.querySelector('input[type=text]')
    userInput.placeholder = userInput.value
    window.location.search = 'user=' + userInput.value
    userInput.value = userInput.value
    console.log(window.location);
})

export default renderTemplate;
