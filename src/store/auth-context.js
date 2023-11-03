import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    //STATE
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //EFFECTS
    useEffect(() => {
        const storedUserInfo = localStorage.getItem('isLoggedIn');
        if (storedUserInfo === 'LOGGED_IN') {
          setIsLoggedIn(true);
        }
      }, []);


    //HANDLERS
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'LOGGED_IN');
        setIsLoggedIn(true);
    }


    //JSX
    return (<AuthContext.Provider value={ { isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler } }>{props.children}</AuthContext.Provider>);
}

export default AuthContext;

