import render from './modules/render.js';
import apiCall from './modules/api.js';
import routie from './modules/router.js';

// Import pages
import home from './views/home.js'
import top from './views/top.js'

routie({
    '': home,
    'top': top,
    'detail': function(){
        render.loading();

        fetch('https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=558413ce30002869acf1d2e2d9c2047b&artist=' + artist +' &track='+ track +'&format=json')
           .then(function(response) {
              return response.json();
            })
            .then(function(json) {
              render.topTracks(json)
            });

    },
    'detail/:artist/:track': function(artist, track){
        console.log(artist + " "+ track);
        fetch('https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=558413ce30002869acf1d2e2d9c2047b&artist=' + artist + '&track=' + track + '&format=json')
        .then (function(response){
            return response.json();
        })
        .then(function(json){
            render.detailSong(json)
        });
    }
});
// 
// // making url
//     const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks';
//     const user = 'nathankeyzer';
//     const key = '558413ce30002869acf1d2e2d9c2047b';
//     //https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json
//     const url = `${endpoint}&user=${user}&api_key=${key}&format=json&page=1`;
//     const endpoint2 = 'https://ws.audioscrobbler.com/2.0/?method=track.getInfo';
//     const url2 = `${endpoint2}&api_key=${key}&artist= &track= &format=json`
// function recent() {
//     fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(json){
//         render.songList(json)
//     });
// }
//test


// (() => {
//   'use strict';
//   // Start Promise
//   window.addEventListener('hashchange', init);
//
//   //begin van routie
//
//   function init() {
//     api.getData(routie().link).then(data => {
//       if (routie().page === 'top') {
//         render.topTracks(data);
//     } else if (routie().page === 'recent') {
//         render.songList(data);
//       }
//       render.currentUser(data);
//     });
//   }
//   init();
// })();
