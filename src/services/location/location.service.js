import camelize from "camelize";
import { RecyclerViewBackedScrollViewBase } from "react-native";
import { locations } from "./location.mock"

export const locationRequest = (searchTerm) => {
    return new Promise((result, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found")
        };

        result(locationMock);
    });
};

export const locationTransform = (result) => {
    const { geometry = {} } = camelize(result.results)[0];
    const { lat, lng } = geometry.location;
    return { lat, lng };
};
