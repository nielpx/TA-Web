import {Outlet} from "react-router-dom"
import {useAuth} from "./AuthContextProvider";
import {useEffect} from "react";
import apiService from "../utils/apiService";

const Authorize = ({children = null, role = [""]}) => {
    const {logout, isLogin, isRole, token, key} = useAuth()

    useEffect(() => {
        if (isLogin) apiService.get("Auth/me", {
            isBasePath: true,
            token: token
        })
            .then((response) => {
                if (response.data.token !== key) {
                    logout()
                    window.location.href = "/"
                }

                if (role.filter(f => f !== "").length > 0) {
                    if (role.filter(f => f !== "").find(isRole) === undefined || role.filter(f => f !== "").find(isRole) === null) {
                        window.location.href = "/dashboard"
                    }
                }
            })
            .catch((err) => {
                if (err.response.data.title === "Unauthorized") {
                    logout()
                    window.location.href = "/"
                }
            })
        else window.location.href = "/"
    }, [isLogin, isRole, key, logout, role, token])

    if (children) return children
    return <Outlet/>
}

export default Authorize