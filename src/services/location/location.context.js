import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                console.log(result)
                setIsLoading(false);
                setLocation(result);

            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
                console.log(err)
            })
    }

    useEffect(() => {
        onSearch(keyword);
    }, []);


    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}