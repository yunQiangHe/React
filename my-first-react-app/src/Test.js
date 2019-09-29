import React, { Component } from 'react'

class Test extends Component {
    render() {
        function formatName(user) {
            return user.firstName + " " + user.lastName
        }

        const name = {
            firstName: 'He',
            lastName: "yunqiang"
        }

        const tpl = <h1>Hello, {formatName(name)}!</h1>;
        return (
            tpl
        )
    }
}

export default Test

