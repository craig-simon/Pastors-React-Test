import Axios from 'axios'

const baseUrl = 'https://api.dev.pastorsline.com/api/contacts.json'

// api req to fetch all contacts
export const fetchAllContacts = (page: number, filter: string) => {
    return Axios({
        url: `${baseUrl}?page=${page}&query=${filter}&companyId=${process.env.REACT_APP_COMPANY_ID}`,
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    })
}

// api req to fetch only us contacts
export const fetchUSContacts = (page: number, filter: string) => {
    return Axios({
        url: `${baseUrl}?page=${page}&query=${filter}&companyId=${process.env.REACT_APP_COMPANY_ID}&countryId=226`,
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    })
}