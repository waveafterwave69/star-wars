import axios from 'axios'

export const SWAPI_ROOT = 'https://swapi.info/api'
export const SWAPI_ROOT_PEOPLE = 'https://swapi.info/api/people'

export const getApiResource = async (url) => {
    try {
        const response = await axios.get(url, {})
        const data = response.data
        return data
    } catch (error) {
        console.error(error.message)
    }
}

export const filmsApi = async (url) => {
    const res = await axios.all(
        url.map((res) => {
            const response = axios.get(res)
            return response
        })
    )

    return res
}
