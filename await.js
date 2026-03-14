async function fetchData() {
    try {
        const result = await fetch('https://jsonplaceholder');

        const data = await result.json();

        console.log(data);
    } catch (error) {
        console.log('api call failed:', error.message);
    }
}

fetchData();