import { createContext, useState } from "react";

export const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [address, setAddress] = useState();

  const handleAddress = (e) => {
    setAddress((address) => e);
  };

  return (
    <AddressContext.Provider value={{ address, handleAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
