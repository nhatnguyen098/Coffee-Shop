import React from 'react'
import Button from '../atoms/buttons'
const userPage = () => {
    return (
        <div>
            <Button color = "primary" onClick = {() => console.log('helllo')}>Hello</Button>
        </div>
    )
}

export default userPage
