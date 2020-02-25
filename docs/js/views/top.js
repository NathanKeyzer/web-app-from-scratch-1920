import render from "../modules/render.js";
import apiCall from "../modules/api.js";

function getHtml() {
  return apiCall({
    method: "user.gettoptracks",
    user: "nathankeyzer"
  }).then(json =>
    json.toptracks.track
      .map(
        song => `
      <section>
      <a href="${song.url}" target="blank"> <img src="${
          song.image[2]["#text"] ? song.image[2]["#text"] : "docs/img/174.png"
        }"></a>
        <div>
          <h2>${song.name}</h2>
          <p>${song.artist.name}</p>
          <p> ${song.playcount}</P>
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

export default renderTemplate;
