import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.localStorage.getItem("__Key_Token__")
        }
        return null;
    });

    useEffect(() => {
        if (token) {
            localStorage.setItem("__Key_Token__", token);
        }
    }, [token])

    const getKey = () => {
        if (!token) return null
        const data = JSON.parse(atob(token))
        return data.key
    }

    const getRole = () => {
        if (!token) return null
        const data = JSON.parse(atob(token))
        return data.role
    }

    const isLogin = () => {
        return token !== null
    }

    const login = (key, role) => {
        const data = btoa(JSON.stringify({key: key.toString(), role}))
        setToken(data)
    }

    const logout = () => {
        localStorage.removeItem("__Key_Token__");
        setToken(null);
    }

    return (<AuthContext.Provider value={{login, logout, isLogin: isLogin(), key: getKey(), token, isRole: getRole()}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within the context')
    }
    return context
}