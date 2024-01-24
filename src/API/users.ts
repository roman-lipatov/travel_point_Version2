const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() {
    let request = (await fetch(BASE_URL).then(response => response.json()));
    return request;
}

export async function getUser(id: number) {
    const url = BASE_URL + `/${id}`
    let request = (await fetch(url).then(response => response.json()))
    return request
}
