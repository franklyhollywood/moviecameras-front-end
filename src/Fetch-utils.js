import request from 'superagent'

const URL =  'https://moviecamerasii.herokuapp.com';

//Get all cameras
export async function fetchAllMovieCameras() {
    const response = await request.get(`${URL}/moviecamerasII`)
    
    return response.body;
}
//get all lenses
export async function fetchAllLenses() {
    const response = await request.get(`${URL}/lenses`)

    return response.body;
}
//get one moviecamera by ID
export async function fetchMovieCameraById(id) {
    const response = await request.get(`${URL}/moviecamerasII/${id}`)

    return response.body;
}

// post one new camera to moviecameras
export async function postNewMovieCamera(moviecamera) {
    const response = await request.post(`${URL}/moviecamerasII`).send(moviecamera)

    return response.body;
}

//edit moviecamera
export async function editMovieCamera(id, newMovieCamera) {
    const response = await request.put(`${URL}/moviecamerasII/${id}`).send(newMovieCamera)

    return response.body;
}

//delete moviecameras
export async function deleteMovieCamera(id) {
    const response = await request.delete(`${URL}/moviecamerasII/${id}`)

    return response.body;
}
