
export const requestWithAuthHeder = async (route, method, data={}) => {
    const config = {
        method: method,
        headers: new Headers({
            'Authorization': localStorage.getItem('jwtToken')
        })
    }

    if(method.toLowerCase() === 'post') {
        config.body = JSON.stringify(data);
        config.headers.set('Content-Type', 'application/json');
    }
    return fetch(route, config).then((res) => {
        if(res.status === 401 || res.status === 403) {
            window.location = "/login"
        }
        return res.json();
    });
}