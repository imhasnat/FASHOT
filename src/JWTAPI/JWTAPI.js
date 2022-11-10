export function JWTAPI(currentUser) {
    fetch('https://service-review-server-tawny.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
        })
        .catch(err => console.log(err.message))
}