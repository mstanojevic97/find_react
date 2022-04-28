
export const requestWithAuthHeder = async (route, method) => {
    return fetch(route, {
        method: method,
        headers: new Headers({
            'Authorization': localStorage.getItem('jwtToken')
        }),
    }).then((res) => {
        if(res.status === 401 || res.status === 403) {
            window.location = "/login"
        }
        return res.json()
    });
}