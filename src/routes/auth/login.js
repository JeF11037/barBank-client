import * as api from 'api.js';

export async function post(req, res) {
    api.post('sessions', req.body).then(response => {
        if(response.user) req.session.token = response.token;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(response));
    })
}