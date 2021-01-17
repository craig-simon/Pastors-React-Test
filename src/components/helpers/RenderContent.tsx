import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Contact from '../modals/Contact'
import * as _ from 'lodash'
import { setCurrentContact } from '../../actions'

const RenderContent = (
    contacts: any,
    searchQuery: string,
    onlyEven: boolean,
    onHide: () => void,
    onContactModal: () => void,
    dispatch: any,
    onFormSubmit: (e: React.FormEvent) => void,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
    const sortedArray = _.values(contacts)
            .sort((a: any, b: any) => {
                return a.index - b.index
            })

        const res = sortedArray.map((el) => {
            const divider = onlyEven ? 2 : 1

            if (el.id % divider === 0) {
                return (
                    <Card 
                        key={el.id} 
                        style={{ marginBottom: '6px', width: '98%', cursor: 'pointer' }} 
                        body
                        onClick={() => {
                            onHide()
                            onContactModal()
                            dispatch(setCurrentContact(el))
                        }}
                    >
                        <Contact element={el} />
                    </Card>
                )
            } else return
        })

        res.unshift(
            // without key i had a warning about 'each component should have key prop'
            <Form key="form" onSubmit={onFormSubmit}>
                <Form.Control 
                    style={{ marginBottom: '6px', width: '98%' }}
                    type="text" 
                    placeholder="Enter query"
                    defaultValue={searchQuery}
                    onChange={onInputChange}
                />
            </Form>
        )

        return res
}

export default RenderContent