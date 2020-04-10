import { gql } from 'apollo-boost';

export const TEST = gql`
    {
        Students {
            name
        }
    }
`;

export const ALL_SPOTS = gql`{
    SpotsByCityUniversityAndDay(city: "Tijuana", university: "5e1e58e4a5942c54d8900917", day: 0) {
        _id
        day
        hour
        price
        latitude
        longitude
        availableSpace
        driver {
            _id
            name
            lastnames
            photo
        }
    }
}`;


export const VIEW_DRIVERS_BY_DAY = gql`
    query Student($id: ID!) {
        Student(idStudent: $id) {
            _id
            spots {
                _id
                day
                hour
                price
                availableSpace
                driver {
                    _id
                    name
                    lastnames
                    photo
                    car {
                        _id
                        brand
                        model
                        plates
                    }
                }
            }
        }
    }
`;

export const GET_SPOTS_DRIVER = gql`
    query SpotsByDriverAndDay($driver: String!, $day: Int!) {
		SpotsByDriverAndDay(driver: $driver, day: $day) {
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
    }
`;