
import { lenses, moviecameraById, moviecamerasII, lensById, moviecameraPost } from './Fetch-utils.js';

//Get all moviecameras
test('moviecamerasII get all', async () => {
  const expectation = [
    {
        "id": expect.any(Number),
        "make": expect.any(String),
        "model": expect.any(String),
        "image": expect.any(String),
        "year_made": expect.any(Number),
        "sound": expect.any(Boolean),
        "lens_type": expect.any(String)
    },
    {
        "id": expect.any(Number),
        "make": expect.any(String),
        "model": expect.any(String),
        "image": expect.any(String),
        "year_made": expect.any(Number),
        "sound": expect.any(Boolean),
        "lens_type": expect.any(String)
    },
    {
        "id": expect.any(Number),
        "make": expect.any(String),
        "model": expect.any(String),
        "image": expect.any(String),
        "year_made": expect.any(Number),
        "sound": expect.any(Boolean),
        "lens_type": expect.any(String)
    },
    {
        "id": expect.any(Number),
        "make": expect.any(String),
        "model": expect.any(String),
        "image": expect.any(String),
        "year_made": expect.any(Number),
        "sound": expect.any(Boolean),
        "lens_type": expect.any(String)
    },
    {
        "id": expect.any(Number),
        "make": expect.any(String),
        "model": expect.any(String),
        "image": expect.any(String),
        "year_made": expect.any(Number),
        "sound": expect.any(Boolean),
        "lens_type": expect.any(String)
    }
]

const data = await moviecamerasII();

expect(data).toEqual(expectation);

});

//get all lenses
test('lenses get all', async () => {
  const expectation = 
  [
    {
        "id": expect.any(Number),
        "lens_type": expect.any(String)
    },
    {
        "id": expect.any(Number),
        "lens_type": expect.any(String)
    },
    {
        "id": expect.any(Number),
        "lens_type": expect.any(String)
    }
]

const data = await lenses();

expect(data).toEqual(expectation);

});

test('Get One moviecamera by ID', async () => {
const expectation = 

{
  "id": 3,
  "make": "Elmo",
  "model": "1012SXL",
  "image": "http://www.mondofoto.com/cameras/Elmo_1012S-XL_2a.jpg",
  "year_made": 1978,
  "sound": true,
  "lens_type": "Fixed lens"
}

const data = await moviecameraById(3)

expect(data).toEqual(expectation);
});

test('Get One lens by ID', async () => {
  const expectation = 
  
  [
    {
        "id": 3,
        "lens_type": "Leica M Mount"
    }
  ]
  
  const data = await lensById(3)
  
  expect(data).toEqual(expectation);
});

test('Add a new ,moviecamera', async () => {
  const camera = {
    
    "id": expect.any(Number),
    "make": "Beaulieu",
    "model": "5008S",
    "image": "https://www.filmkorn.org/super8data/database/cameras_list/cameras_image/beaulieu_5008s_ms.jpg",
    "year_made": 1976,
    "sound": true,
    "lens_id": 1
}
  
  const data = await moviecameraPost(camera)
  
  expect(data).toEqual(camera);
});