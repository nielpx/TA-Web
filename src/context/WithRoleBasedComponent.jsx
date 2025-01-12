import {useAuth} from "./AuthContextProvider";
import {Navigate} from "react-router-dom";

const WithRoleBasedComponent = ({route = [{role: "", components: <></>}]}) => {
    const {isRole} = useAuth()

    if (route.filter(f => f !== "").find(f => f.role === isRole)) return route.filter(f => f !== "").find(f => f.role === isRole).components
    return <Navigate to={"/dashboard"}/>
}

export default WithRoleBasedComponent