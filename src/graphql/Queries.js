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