import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllContacts, incAllContactsPage, changeAllContactsQuery, loadAllNewContacts, setAllContactsOnlyEven, setCurrentContact } from '../../actions'
import ModalComponent from './ModalComponent'
import RenderContent from '../helpers/RenderContent'

// Component for modal window with all contacts

interface ModalComponentProps {
    show: boolean,
    onHide: () => void,
    header: string,
    onChangeModal: () => void,
    onContactModal: () => void
}

const AllContactsModal = (props: ModalComponentProps) => {
    const allContacts = useSelector((state: any) => state.allContacts.contacts)
    const page = useSelector((state: any) => state.allContacts.page)
    const loadedAmount = useSelector((state: any) => state.allContacts.loadedAmount)
    const searchQuery = useSelector((state: any) => state.allContacts.searchQuery)
    const onlyEven = useSelector((state: any) => state.allContacts.onlyEven)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    let timer: any
    const value = useRef('')

    const onIncPage = () => {
        dispatch(incAllContactsPage())
    }
    
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        value.current = e.target.value
        clearTimeout(timer)
        timer = setTimeout(() => {
            setLoading(true)
            dispatch(changeAllContactsQuery(value.current))
        }, 1000)
    }

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        clearTimeout(timer)
        dispatch(changeAllContactsQuery(value.current))
        setLoading(true)
    }

    const onRenderContent = () => {
        return RenderContent(
            allContacts,
            searchQuery,
            onlyEven,
            props.onHide,
            props.onContactModal,
            dispatch,
            onFormSubmit,
            onInputChange
        )
    }

    useEffect(() => {
        if (page > 1) {
            dispatch(loadAllContacts(page, searchQuery, loadedAmount))
        }
    }, [page])

    useEffect(() => {
        dispatch(loadAllNewContacts(searchQuery))
        setLoading(true)
    }, [searchQuery])

    useEffect(() => {
        setLoading(false)
    }, [allContacts])

    return (
        <ModalComponent 
            show={props.show} 
            onHide={props.onHide} 
            header={props.header} 
            renderContent={onRenderContent}
            onIncPage={onIncPage}
            loading={loading}
            onChangeModal={props.onChangeModal}
            onOnlyEven={() => dispatch(setAllContactsOnlyEven())}
            isChecked={onlyEven}
        />
    )
}

export default AllContactsModal