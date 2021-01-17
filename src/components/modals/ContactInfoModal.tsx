import '../css/ContactInfoModal.css'
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'

// Component for modal window with contact info

interface ContactInfoModalProps {
    show: boolean,
    onHide: (modal: string) => void,
    onUsContactsModal: () => void,
    onAllContactsModal: () => void
}

const ContactInfoModal = (props: ContactInfoModalProps) => {
    const currentContact = useSelector((state: any) => state.currentContact)
    const modal = useSelector((state: any) => state.modal)
    
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="contact-info-content">
                    <h4>ID: {currentContact.id}</h4>
                    <p>First Name: {currentContact.first_name}</p>
                    <p>Last Name: {currentContact.last_name}</p>
                    <p>Phone number: {currentContact.phone_number}</p>
                    <p>Address: {currentContact.address}</p>
                </div>
                        
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.onHide(modal)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ContactInfoModal