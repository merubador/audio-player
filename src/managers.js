export const fetchTracks = () =>
  fetch(`http://localhost:8080/api/tracks`, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "JSON",
      "Access-Control-Allow-Origin": "http://localhost"
    }
  })
    .then(response => response.json())
    .then(data => data.map((item, index) => ({ ...item, id: index })));
