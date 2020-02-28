import render from "../modules/render.js"
import apiCall from "../modules/api.js"

function getHtml(artist, track) {
    return apiCall({
        method: 'track.getInfo',
        artist: `${artist}`,
        track: `${track}`
    }).then(data => {
        const checkAlbumCover = data.track.album ? data.track.album : null
        return `
            <section class="detail">
            <img src="${
               checkAlbumCover !== null ? data.track.album.image[3]['#text'] : '../docs/img/300.png'
            }">
              <div>
                <h2>${data.track.name}</h2>
                <p>${data.track.artist.name}</p>
              </div>
            </section>
            `
    }
    )
}

function renderTemplate(artist, track) {
    render.loadingState()
    getHtml(artist, track).then(html => render.template(html))
}

export default renderTemplate
