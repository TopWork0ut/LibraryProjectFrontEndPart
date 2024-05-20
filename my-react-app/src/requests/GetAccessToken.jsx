import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import Request from "./Request";
import { HttpMethods } from "./HttpMethods";

export const AUTH_SERVER_ADDRESS = "http://localhost:8090"
export const CLIENT_ID = "LibraryAppClient"
export const REALM_ID = "LibraryAppRealm"
const REDIRECT_URL = "http://localhost:3000/get-access-token-by-code"
const CLIENT_SECRET = "vqMQIxHnbyVga77QOped0i1uh0Ewn94u"
const CODE_CHALLENGE = "61dcd90c-01e1-4a01-a40a-11538f121c08.a4ceddf2-4a25-482d-9f75-0681b0c6e13b.6e7a8a21-bdb5-49e8-8f6b-8491267a0c90"

export default function GetAccessToken(){
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {

        const code = searchParams.get("code")

        console.log("CODE:")
        console.log(code)

        const xWwwformUrlencodedData = {
            grant_type: "authorization_code",
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URL,
            client_secret: CLIENT_SECRET,
            code_challenge: CODE_CHALLENGE,
            code: code
        }

        axios.post(`${AUTH_SERVER_ADDRESS}/realms/${REALM_ID}/protocol/openid-connect/token`, 
            qs.stringify(xWwwformUrlencodedData),
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded'},
                }).then((res) => {
                    localStorage.setItem("access_token", res.data['access_token'])
                    navigate('/')

                    Request.sendRequest("/aaa", HttpMethods.PATCH, {"a444444": "a1111"}).then((r) => {
                        console.log(r)
                    })

                    
                }).catch((err) => {
                    console.log(err)
                })
    }, [navigate]);

}
