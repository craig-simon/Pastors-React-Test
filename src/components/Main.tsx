import './css/Buttons.css'
import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { changeModal } from '../actions'
import { useHistory } from 'react-router-dom'

// Main component with 2 buttons

interface MainProps {
    onModalAllContactsShow: () => void,
    onModalUSContactsShow: () => void
}

const Main = (props: MainProps) => {
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className="buttons-block">
            <Button 
                className="all-contacts-btn" 
                variant="default"
                onClick={() => {
                    props.onModalAllContactsShow()
                    dispatch(changeModal('All Contacts'))
                    history.push('/all_contacts')
                }}>Button A
            </Button>
            <Button 
                variant="default"
                className="us-contacts-btn"
                onClick={() => {
                    props.onModalUSContactsShow()
                    dispatch(changeModal('US Contacts'))
                    history.push('/us_contacts')
                }}>Button B
            </Button>
        </div>
    )
}

export default Main