import axios from 'axios'

export const SWAPI_ROOT = 'https://swapi.info/api'
export const SWAPI_ROOT_PEOPLE = 'https://swapi.info/api/people'

export const getApiResource = async (
    url,
    peopleFirstIndex,
    peopleLastIndex
) => {
    try {
        const response = await axios.get(url, {})
        const data = response.data
        return data.slice(peopleFirstIndex, peopleLastIndex)
    } catch (error) {
        console.error(error.message)
    }
}
