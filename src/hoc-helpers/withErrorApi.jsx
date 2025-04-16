import { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

export function withErrorApi(View) {
    return (props) => {
        const [errorApi, setErrorApi] = useState(false)

        return (
            <>
                {errorApi ? (
                    <ErrorMessage />
                ) : (
                    <View setErrorApi={setErrorApi} {...props} />
                )}
            </>
        )
    }
}
