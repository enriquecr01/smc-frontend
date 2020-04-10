import { gql } from 'apollo-boost';

export const LOGIN = gql`
    mutation($enrollNumber: String!, $password: String!) {
        login(enrollNumber: $enrollNumber, password: $password) {
            success
            token
            errors
            isDriver
            user {
                _id
                name
                lastnames
                university
                {
                    _id
                    name
                }
                city
                photo
                raiting
                phone
                enrollNumber
                
            }
        }
    }`;

export const STUDENT_MUTATION_WITH_CAR = gql`
       mutation createStudent(
                            $enrollNumber: String!,
                            $name: String!,
                            $lastnames: String!, 
                            $university: ID!,
                            $city: String!,
                            $car: ID,
                            $password: String!,
                            $phone: String!,
                            $latitude: Float!,
                            $longitude: Float!) {
            createStudent(input: {
                enrollNumber: $enrollNumber,
                name: $name,
                lastnames: $lastnames, 
                university: $university,
                car: $car,
                city: $city,
                password: $password,
                phone: $phone,
                latitude: $latitude,
                longitude: $longitude}) 
            {
                _id
                name
                car {
                    _id
                    year
                    spaceInCar
                    status
                    plates
                }
                raiting
                photo
            }
        }`;


export const STUDENT_MUTATION = gql`
        mutation createStudent(
            $enrollNumber: String!,
            $name: String!,
            $lastnames: String!, 
            $university: ID!,
            $city: String!,
            $car: ID,
            $password: String!,
            $phone: String!,
            $latitude: Float!,
            $longitude: Float!) {
        createStudent(input: {
            enrollNumber: $enrollNumber,
            name: $name,
            lastnames: $lastnames, 
            university: $university,
            car: $car,
            city: $city,
            password: $password,
            phone: $phone,
            latitude: $latitude,
            longitude: $longitude}) 
        {
            _id
            name
            car {
                _id
                year
                spaceInCar
                status
                plates
            }
            raiting
            photo
        }
     }`;

export const CREATE_CAR = gql`
    mutation createCar(
            $brand: String!,
            $model: String!,
            $license: String!,
            $color: String!,
            $year: Int!,
            $spaceInCar: Int!,
            $plates: String!,
            ){
        createCar(input: {
            brand: $brand, 
            model: $model, 
            license: $license, 
            color: $color, 
            year: $year, 
            spaceInCar: $spaceInCar, 
            status: 1, 
            plates: $plates}) {
            _id
        }
    }`;

export const CREATE_SPOT = gql`
    mutation createSpot($driver: String!, 
                        $latitude: Float!, 
                        $longitude: Float!,
                        $price: Float!,
                        $hour: String!,
                        $day: Int!) {
        createSpot(input: {
            driver: $driver,
            latitude: $latitude,
            longitude: $longitude,
            price: $price,
            hour: $hour,
            day: $day}) {
                _id
            day
            hour
            price
            latitude
            longitude
            passengers {
                _id
                name
                lastnames
                raiting
            }
            availableSpace
            status
    }
}`;

export const UPDATE_SPOT = gql`
    mutation updateSpot($id: ID!,
  									$driver: String!, 
  									$latitude: Float!, 
  									$longitude: Float!,
										$price: Float!,
										$hour: String!,
										$day: Int!) {
  updateSpot(input: {
    driver: $driver,
  	latitude: $latitude,
  	longitude: $longitude,
  	price: $price,
  	hour: $hour,
  	day: $day}, _id: $id) {
        _id
        day
        hour
        price
        latitude
        longitude
        passengers {
            _id
            name
            lastnames
            raiting
        }
        availableSpace
        status
    }
}`;


export const DELETE_SPOT = gql`
    mutation deleteSpot($id: ID!) {
    deleteSpot(_id: $id) {
        _id
        status
    }
}`;