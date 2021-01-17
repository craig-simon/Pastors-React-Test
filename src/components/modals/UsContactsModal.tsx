import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeUsContactsQuery, loadUsContacts, loadUsNewContacts, incUsContactsPage, setUsContactsOnlyEven } from '../../actions'
import ModalComponent from './ModalComponent'
import RenderContent from '../helpers/RenderContent'

// Component for modal window with US contacts

interface ModalComponentProps {
    show: boolean,
    onHide: () => void,
    header: string,
    onChangeModal: () => void,
    onContactModal: () => void
}

const UsContactsModal = (props: ModalComponentProps) => {
    const usContacts = useSelector((state: any) => state.usContacts.contacts)
    const page = useSelector((state: any) => state.usContacts.page)
    const loadedAmount = useSelector((state: any) => state.usContacts.loadedAmount)
    const searchQuery = useSelector((state: any) => state.usContacts.searchQuery)
    const onlyEven = useSelector((state: any) => state.usContacts.onlyEven)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    let timer: any
    const value = useRef('')

    const onIncPage = () => {
        dispatch(incUsContactsPage())
    }   

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        value.current = e.target.value
        clearTimeout(timer)
        timer = setTimeout(() => {
            setLoading(true)
            dispatch(changeUsContactsQuery(value.current))
        }, 1000)
    }

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        clearTimeout(timer)
        dispatch(changeUsContactsQuery(value.current))
        setLoading(true)
    }

    const renderContent = () => {
        return RenderContent(
            usContacts,
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
            dispatch(loadUsContacts(page, searchQuery, loadedAmount))
        }
    }, [page])

    useEffect(() => {
        setTimeout(() => {
            dispatch(loadUsNewContacts(searchQuery))
            setLoading(true)
        }, 2000)
    }, [searchQuery])

    useEffect(() => {
        setLoading(false)
    }, [usContacts])

    return (
        <ModalComponent 
            show={props.show} 
            onHide={props.onHide} 
            header={props.header} 
            renderContent={renderContent}
            onIncPage={onIncPage}
            loading={loading}
            onChangeModal={props.onChangeModal}
            onOnlyEven={() => dispatch(setUsContactsOnlyEven())}
            isChecked={onlyEven}
        />
    )
}

export default UsContactsModal