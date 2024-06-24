import React, { useState, createContext } from 'react';

// Create context
const SidebarContext = createContext();

function SidebarProvider({ children }) {
    // Sidebar state
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    );
}

export { SidebarProvider, SidebarContext }; 
