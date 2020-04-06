import { client } from './../apolloClient';
import { ALL_SPOTS, VIEW_DRIVERS_BY_DAY, GET_SPOTS_DRIVER } from './Queries';

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

export async function getSpotsByDriverId(id, day) {
  let response = await client.query({
    variables: { driver: id, day: day },
    query: GET_SPOTS_DRIVER
  });

  return response.data.SpotsByDriverAndDay;
}


