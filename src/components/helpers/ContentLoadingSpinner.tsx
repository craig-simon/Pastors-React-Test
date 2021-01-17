import '../css/Spinner.css'
import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

// spinner for filling gaps between loading contacts

const ContentLoadingSpinner = () => {
    return (
        <div className="spinner-background">
            <Spinner className="spinner" animation="border" />
        </div>
    )
}

export default ContentLoadingSpinner