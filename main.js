// fetch("https://example.com/api/data")
//   .then((response) => response.json())
//   .then((data) => {
//     // Work with the JSON data here
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
