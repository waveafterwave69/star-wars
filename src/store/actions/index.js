export const setPersonToFav = (person) => ({
    type: 'ADD_PERSON_TO_FAV',
    payload: person,
})

export const removePersonToFav = (personId) => ({
    type: 'REMOVE_PERSON_TO_FAV',
    payload: personId,
})
