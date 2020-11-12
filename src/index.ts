import {get} from "./router";

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // default response: 405 method not allowed
    let response = new Response(null, {status: 405});
    if (method === 'GET') {
        response = await get(path, request.headers.get('Range') || '');
    } else if (method === 'PROPFIND') {

    } else if (method === 'MKCOL') {

    } else if (method === 'OPTION') {

    }

    // CORS config
    response = new Response(response.body, response);
    response.headers.set('Access-Control-Allow-Origin', url.origin);
    return response;
}
