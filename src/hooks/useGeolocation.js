import React, { useState, useEffect } from 'react';

export const useGeolocation = () => {

    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {
            lat: '',
            lng: ''
        }
    })

    const onSuccess = locate => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: locate.coords.latitude,
                lng: locate.coords.longitude
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error: error
        })
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: 'geolocation not supported'
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    return location
}

export default useGeolocation;