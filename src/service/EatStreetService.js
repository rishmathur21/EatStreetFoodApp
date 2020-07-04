
import { eatStreetsAccessKey } from "../constants/constants";

export const lookupRestaurants = (streetAddress, radius) => 
    fetch(`https://eatstreet.com/publicapi/v1/restaurant/search?method=both&pickup-radius=${radius}&street-address=${streetAddress}`, {
        method: "GET",
        headers: {
            "X-Access-Token": eatStreetsAccessKey,
            "content-type":"application/json"
        }
    })
        .then(response => response.json())