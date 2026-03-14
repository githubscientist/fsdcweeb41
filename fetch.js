const response = fetch('https://jsonplaceholder.typicode.com/posts/3/comments');

response
    .then((result) => {
        // this is called when the api call is resolved
        return result.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('api call failed:', error.message);
    })