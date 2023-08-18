import axios from 'axios'

export const login = (data) => {
    axios.post("https://64db667e593f57e435b0e831.mockapi.io/login", data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
}