const request = async (url, metodth = "GET", data) => {
    const response = await fetch(url, {
        method: metodth, // GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    });
    return response.json();
}
export default request;