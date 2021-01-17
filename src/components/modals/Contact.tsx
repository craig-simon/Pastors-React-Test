import React from 'react'

// Helper component for renderind contacts

interface ContactProps {
    element: any
}

const Contact = (props: ContactProps) => {
    return (
        <div>
            <h4>ID: {props.element.id}</h4>
            <h5>Name: {props.element.first_name}</h5>
            <h5>Last name: {props.element.last_name}</h5>
        </div>
    )
}

export default Contact