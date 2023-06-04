import React, { useState, createContext } from "react";
// create context
const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.SidebarProvider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.SidebarProvider>
  );
};

export default SidebarProvider;
