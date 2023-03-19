import React, { useState, createContext } from "react";
export const PalletCtx = createContext();

function PalletContext({ children }) {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };
  return <PalletCtx.Provider value={value}>{children}</PalletCtx.Provider>;
}

export default PalletContext;
