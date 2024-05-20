import React from 'react';
import axios from 'axios';
import { HttpMethods } from './HttpMethods';

const BACKEND_SERVER_ADDRESS = "http://localhost:8080"
export const BEARER_HEADER_PREFIX = "Bearer "

export default class Request{
    static async sendRequest(url = "", httpMethod = HttpMethods.GET, body = {}){
        const access_token = localStorage.getItem("access_token")
        let result = null

        switch (httpMethod){
            case HttpMethods.GET:
                result = await axios.get(`${BACKEND_SERVER_ADDRESS}${url}`, 
                    {
                        headers: {Authorization: BEARER_HEADER_PREFIX + access_token}
                    })
                break
            case HttpMethods.POST:
                result = await axios.post(`${BACKEND_SERVER_ADDRESS}${url}`, 
                    body,
                    {
                        headers: {
                            Authorization: BEARER_HEADER_PREFIX + access_token,
                        },
                    })
                break
            case HttpMethods.PUT:
                result = await axios.put(`${BACKEND_SERVER_ADDRESS}${url}`,
                    body,
                    {
                        headers: {Authorization: BEARER_HEADER_PREFIX + access_token}
                    })
                break
            case HttpMethods.PATCH:
                result = await axios.patch(`${BACKEND_SERVER_ADDRESS}${url}`,
                    body,
                    {
                        headers: {Authorization: BEARER_HEADER_PREFIX + access_token}
                    })
                break
            case HttpMethods.DELETE:
                result = await axios.delete(`${BACKEND_SERVER_ADDRESS}${url}`, 
                    {
                        headers: {Authorization: BEARER_HEADER_PREFIX + access_token}
                    })
            default:
                result = {
                    data: "HttpMethod is not valid!"
                }  
        }

        return result.data
    }
}
