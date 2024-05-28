import { jwtDecode } from "jwt-decode";


export class LoginStatus{
    static getLoginStatus(){
        const current_user = {
            email: null,
            firstName: null,
            lastName: null
        }

        const access_token = localStorage.getItem("access_token")

        if(access_token != null){
            const decoded_token = jwtDecode(access_token)

            const username = decoded_token.email
            const firstName = decoded_token.given_name
            const lastName = decoded_token.family_name

            current_user.email = username
            current_user.firstName = firstName
            current_user.lastName = lastName
        } 

        console.log(current_user)

        return current_user
    }
}
