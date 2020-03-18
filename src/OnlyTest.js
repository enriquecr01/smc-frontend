import React, { Component } from 'react';
import { TEST } from './graphql/Queries';
import { client } from './apolloClient';

export default class OnlyTest extends Component {

    state = {
        students: []
    }

    getStudents = async () => {

        const response = await client.query({
            variables: {},
            query: TEST
          });

        console.log(response.data.Students);

        this.setState({students: response.data.Students});
    }

    render() {

        return (
            <ul>
                <button onClick={this.getStudents}>Click</button>
                {
                    this.state.students.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        );
    }
}