# Webapp from scratch

## My web App

[Application link](https://nathankeyzer.github.io/web-app-from-scratch-1920/?user=nathankeyzer)

![Application](https://github.com/NathanKeyzer/web-app-from-scratch-18-19/blob/master/week1/public/img/application.png?raw=true)

# Table of content

- [Application](#Application)
- [Actor Diagram](#Actor-diagram)
- [API](#What-is-the-API)
- [Router](#router)

# Application

This is an application that uses the api of [Last.fm](https://www.last.fm/api). With this API you can show songs and artist which listened on Spotify. I chose to work with this api because i listen music everyday. To listen to this music i use Spotify that is connected to my last.fm account. I really like the idea to make my own showcase design of my own music data.

## Actor diagram

![Actor Diagram](https://github.com/NathanKeyzer/web-app-from-scratch-1920/blob/master/docs/img/actordiagram2.png?raw=true)

## What is the API
Making a call to the lastfm api. Here is stor the api url in an object to make my code cleaner and so i don't have to repeat myself as i did before.

```javascript
const apiCall = queryObject => {
  const settings = {
    apiUrl: "https://ws.audioscrobbler.com/2.0/",
    apiKey: "YOUR_API_KEY",
    format: "json"
  };

  const queryString = Object.keys(queryObject)
    .map(key => key + "=" + queryObject[key])
    .join("&");

  const url = `${settings.apiUrl}?api_key=${settings.apiKey}&format=${
    settings.format
  }&${queryString}`;
  console.log(url);
  return fetch(url).then(res => res.json());
};

export default apiCall;

```

## Router

Working with a router, object literals and modules was a really good learning process this made me think about how to structure my code. Especially working with the object literals pattern. So i could build a nice structure for my code.

For routing i used Routie. Routie is a javascript hash routing library.

```javascript
import render from './render.js';
import routie from './routie.js';

// Import pages
import home from '../views/home.js'
import top from '../views/top.js'
import detail from '../views/detail.js'

routie({
    '': home,
    'top': top,
    'detail/:artist/:track': detail
});

export default routie;

```

## Interaction diagram

![Interaction Diagram](https://github.com/NathanKeyzer/web-app-from-scratch-1920/blob/master/docs/img/interaction.png?raw=true)

## Feature wishlist

- [x] Users can see their recentTracks
- [x] Users can see their topTracks
- [x] Users can see details of a track
- [x] Promises
- [x] Object literals
- [x] Routie
- [x] Modules

[MIT](LICENCE) © [Nathan Keyzer](https://nathankeyzer.nl)
