import { useEffect } from "react";
import { AUTH_SERVER_ADDRESS, REALM_ID } from "./GetAccessToken";


export default function Logout(){

    useEffect(() => {
        localStorage.removeItem("access_token")
        window.location.assign(`${AUTH_SERVER_ADDRESS}/realms/${REALM_ID}/protocol/openid-connect/logout`)
    }, []);

}




