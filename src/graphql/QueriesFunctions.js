import { client } from './../apolloClient';
import { ALL_SPOTS } from './Queries';

export async function getAllSpots() {
    let response = await client.query({
        variables: { },
        query: ALL_SPOTS
      });

    return response.data.SpotsByCityUniversityAndDay;
}