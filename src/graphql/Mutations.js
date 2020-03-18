import { gql } from 'apollo-boost';

export const LOGIN = gql`
    mutation($enrollNumber: String!, $password: String!) {
        login(enrollNumber: $enrollNumber, password: $password) {
            success
            token
            errors
            isDriver
            user {
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