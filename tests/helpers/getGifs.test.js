import {getGifs} from '../../src/helpers/getGifs';

describe('Puebas en getGifs()', () => {
    

    test('debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch');
       //console.log(gifs);
       expect(gifs.length).toBeGreaterThan(0);
       expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any( String ),
        url: expect.any( String )
       })
    });
});