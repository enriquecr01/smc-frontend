import { client } from './../apolloClient';
import { ALL_SPOTS, VIEW_DRIVERS_BY_DAY } from './Queries';

export async function getAllSpots() {
    let response = await client.query({
        variables: { },
        query: ALL_SPOTS
      });

    return response.data.SpotsByCityUniversityAndDay;
}

export async function getDriversByStudentId(idUser) {
  let response = await client.query({
      variables: { id: idUser },
      query: VIEW_DRIVERS_BY_DAY
    });

    const spotsAPI = response.data.Student.spots;

  return spotsAPI;
}