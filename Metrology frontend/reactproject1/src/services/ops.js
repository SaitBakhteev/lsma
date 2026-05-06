async function getURLData(url) { // https://api.users.skroy.ru/users
    const response = await fetch(url,
        { 'method': 'GET' }
    );
    return response.json();
};
export default getURLData;