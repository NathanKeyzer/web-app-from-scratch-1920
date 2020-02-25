const apiCall = queryObject => {
  const settings = {
    apiUrl: "https://ws.audioscrobbler.com/2.0/",
    apiKey: "558413ce30002869acf1d2e2d9c2047b",
    format: "json"
  };

// Makes from Object {key: value} -> 'key=value' & joins them together with & in between: key=value&key=value
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
