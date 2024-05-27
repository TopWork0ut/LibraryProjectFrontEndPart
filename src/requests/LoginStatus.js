import { jwtDecode } from "jwt-decode";


export class LoginStatus{
    static getLoginStatus(){
        const current_user = {
            id: null,
            email: null,
            firstName: null,
            lastName: null
        }

        const access_token = localStorage.getItem("access_token")

        if(access_token != null){
            const decoded_token = jwtDecode(access_token)
            
            console.log(decoded_token)

            const id = decoded_token.exp
            const username = decoded_token.email
            const firstName = decoded_token.given_name
            const lastName = decoded_token.family_name

            current_user.id = id
            current_user.email = username
            current_user.firstName = firstName
            current_user.lastName = lastName
        } 

        console.log(current_user)

        return current_user
    }
}
