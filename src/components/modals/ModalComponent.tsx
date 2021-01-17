import '../css/Buttons.css'
import '../css/ModalComponent.css'
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Scrollbars from 'react-custom-scrollbars'
import Form from 'react-bootstrap/Form'
import ContentLoadingSpinner from '../helpers/ContentLoadingSpinner'
import { changeModal } from '../../actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

interface ModalComponentProps {
    show: boolean,
    onHide: () => void,
    header: string,
    renderContent: () => any[],
    onIncPage: () => void,
    loading: boolean,
    onChangeModal: () => void,
    onOnlyEven: () => void,
    isChecked: boolean
}

const ModalComponent = (props: ModalComponentProps) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onButtonClick = (modal: string) => {
        const newURI: string = modal === 'All Contacts' ? '/all_contacts' : '/us_contacts'

        props.onHide()
        history.push(newURI)
        dispatch(changeModal(modal))
        props.onChangeModal()
    }

    const onScroll = (e: any) => {
        const { scrollHeight, scrollTop } = e.target

        if (scrollHeight - scrollTop === 300) {
            props.onIncPage()
        }
    }

    return (
        <Modal
            onHide={() => {
                props.onHide()
                history.push('/')
            }}
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {props.loading && <ContentLoadingSpinner />}
                <div className={props.loading ? 'onloading scrollbar-content' : 'scrollbar-content'}>
                    <Scrollbars 
                        style={{ height: '300px' }}
                        onScroll={onScroll}
                    >
                        {props.renderContent()}
                    </Scrollbars>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Form.Check 
                    type="checkbox" 
                    label="Only even" 
                    className="even-checkbox"
                    onClick={() => props.onOnlyEven()}
                    defaultChecked={props.isChecked}
                />
                <Button 
                    disabled={props.header === 'All Contacts' ? true : false}
                    variant="default"
                    className="all-contacts-btn"
                    onClick={() => onButtonClick('All Contacts')}
                >Modal A</Button>
                <Button 
                    disabled={props.header === 'US Contacts' ? true : false}
                    variant="default"
                    className="us-contacts-btn"
                    onClick={() => onButtonClick('US Contacts')}
                >Modal B</Button>
                <Button 
                    onClick={() => {
                        props.onHide()
                        history.push('/')
                    }}
                    variant="default"
                    className="close-btn"
                >Close
                </Button>
            </Modal.Footer>
    </Modal>
    )
}

export default ModalComponent