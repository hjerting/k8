fetch("http://localhost:5500/ansatte.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
