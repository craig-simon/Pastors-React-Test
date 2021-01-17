import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import Main from './Main'
import AllContactsModal from './modals/AllContactsModal';
import UsContactsModal from './modals/UsContactsModal';
import ContactInfoModal from './modals/ContactInfoModal';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const [showModalAllContacts, setShowModalAllContacts] = useState(false)
    const [showModalUSContacts, setShowModalUSContacts] = useState(false)
    const [showContactInfoModal, setShowContactInfoModal] = useState(false)

    return (
        <div className="container">
            <BrowserRouter>
                <Main 
                    onModalAllContactsShow={() => setShowModalAllContacts(true)}
                    onModalUSContactsShow={() => setShowModalUSContacts(true)}
                />
                <AllContactsModal 
                    show={showModalAllContacts}
                    onHide={() => setShowModalAllContacts(false)}
                    onChangeModal={() => setShowModalUSContacts(true)}
                    onContactModal={() => setShowContactInfoModal(true)}
                    header="All Contacts"
                />
                <UsContactsModal
                    show={showModalUSContacts}
                    onHide={() => setShowModalUSContacts(false)}
                    onChangeModal={() => setShowModalAllContacts(true)}
                    onContactModal={() => setShowContactInfoModal(true)}
                    header="US Contacts"
                />
                <ContactInfoModal 
                    show={showContactInfoModal}
                    onHide={(modal: string) => {
                        if (modal === 'All Contacts') {
                            setShowModalAllContacts(true)
                        } else {
                            setShowModalUSContacts(true)
                        }
                        setShowContactInfoModal(false)
                    }}
                    onUsContactsModal={() => setShowModalUSContacts(true)}
                    onAllContactsModal={() => setShowModalAllContacts(true)}
                />
            </BrowserRouter>

        </div>
    )
}   

export default App