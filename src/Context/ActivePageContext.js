import React, { createContext, useState } from 'react';

export const ActivePageContext = createContext();

export const ActivePageProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('');

    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </ActivePageContext.Provider>
    );
};
