import render from "../modules/render.js";
import apiCall from "../modules/api.js";

function getHtml() {
  return apiCall({
    method: "user.getrecenttracks",
    user: "nathankeyzer",
    page: "1"
  }).then(json => json.recenttracks.track
      .map(
        song => `
              <section class="nowPlaying">
                  <a href="#detail/${song.artist["#text"]}/${
          song.name
        }"> <img src="${
          song.image[2]["#text"] ? song.image[2]["#text"] : "docs/img/174.png"
        }"></a>
                <div>
                  <h2>${song.name}</h2>
                  <p>${song.artist["#text"]}</p>
                  <p>${song.date ? song.date["#text"] : "Now Playing"}</p>
                </div>
              </section>
                `
      ).join(""))
}

function renderTemplate() {
    render.loadingState()
    getHtml().then(htmlTemplate => render.template(htmlTemplate))
}

export default renderTemplate;
