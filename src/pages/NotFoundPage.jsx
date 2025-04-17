import { useLocation } from 'react-router'

export default function NotFoundPage() {
    let location = useLocation()

    return (
        <>
            <div className="main__container">
                <h1
                    style={{
                        marginTop: '60px',
                        textAlign: 'center',
                        fontSize: '86px',
                        fontWeight: '800',
                    }}
                >
                    404
                </h1>
                <h1
                    style={{
                        textAlign: 'center',
                        fontSize: '80px',
                        fontWeight: '800',
                    }}
                >
                    NOT FOUND
                </h1>
                <p
                    style={{
                        marginTop: '25px',
                        textAlign: 'center',
                        fontSize: '28px',
                        fontWeight: '600',
                    }}
                >
                    No match for {location.pathname}
                </p>
            </div>
        </>
    )
}
