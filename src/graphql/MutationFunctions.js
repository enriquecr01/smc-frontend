import { client } from './../apolloClient';
import { LOGIN, 
        STUDENT_MUTATION_WITH_CAR,
        STUDENT_MUTATION,
        CREATE_CAR,
        CREATE_SPOT,
        UPDATE_SPOT,
        DELETE_SPOT
    } from './Mutations'; 


export async function login(enrollNumber, password) {
    const response = await client.mutate({
        variables: {  
          enrollNumber: enrollNumber,
          password: password },
        mutation: LOGIN
      });

    return response.data.login;
}

export async function registerCar(car) {
    try {
        const response = await client.mutate({
          variables: {  
            brand: car.brand,
            model: car.model,
            license: car.license, 
            color: car.color,
            year: parseInt(car.year),
            spaceInCar: parseInt(car.spaceInCar),
            plates: car.plates},
          mutation: CREATE_CAR
        });
        const data = response.data.createCar;
        return data;
    } catch(err){
        return 'error';
    }
}

export async function registerStudent(student) {
    try {
        const response = await client.mutate({
          variables: {  
            enrollNumber: student.enrollNumber,
            name: student.name,
            lastnames: student.lastnames, 
            university: student.university,
            city: student.city,
            password: student.password,
            phone: student.phone,
            latitude: student.latitude,
            longitude: student.longitude
        },
          mutation: STUDENT_MUTATION
        });
        return response.data.createStudent;
      } catch(err){
        return 'error';
      }
}

export async function registerStudentWithCar(student, carId) {
    try {
        const response = await client.mutate({
          variables: {  
            enrollNumber: student.enrollNumber,
            name: student.name,
            lastnames: student.lastnames, 
            university: student.university,
            city: student.city,
            password: student.password,
            phone: student.phone,
            latitude: student.latitude,
            longitude: student.longitude,
            car: carId
        },
          mutation: STUDENT_MUTATION_WITH_CAR
        });
        return response.data.createStudent;
      } catch(err){
          return 'error';
      }
}

export async function createSpot(spot) {
  try {
      const response = await client.mutate({
        variables: {  
          driver: spot.driver,
          latitude: spot.latitude,
          longitude: spot.longitude,
          price: spot.price,
          hour: spot.hour,
          day: spot.day
      },
        mutation: CREATE_SPOT
      });
      return response.data.createSpot;
    } catch(err){
        return 'error';
    }
}

export async function updateSpot(spot, id) {
  try {
      const response = await client.mutate({
        variables: {  
          id: id,
          driver: spot.driver,
          latitude: spot.latitude,
          longitude: spot.longitude,
          price: spot.price,
          hour: spot.hour,
          day: spot.day
      },
        mutation: UPDATE_SPOT
      });
      return response.data.updateSpot;
    } catch(err){
        return 'error';
    }
}

export async function deleteSpot(id) {
  try {
      const response = await client.mutate({
        variables: {  
          id: id
      },
        mutation: DELETE_SPOT
      });
      return response.data.deleteSpot;
    } catch(err){
        return 'error';
    }
}
