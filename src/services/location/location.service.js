import camelize from "camelize";
import { RecyclerViewBackedScrollViewBase } from "react-native";
import { locations } from "./location.mock"

export const locationRequest = (searchTerm) => {
    return new Promise((result, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found")
        };

        RecyclerViewBackedScrollViewBase(locationMock);
    });
};

export const locationTransform = (result) => {
    const { geometry = {} } = camelize(result.results)[0];
    const { let, lng } = geometry.location;

    return { lat, lng };
};
