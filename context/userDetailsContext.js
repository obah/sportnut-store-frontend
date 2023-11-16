"use client";

import { createContext, useState } from "react";

export const UserDetailsContext = createContext({});

export function UserDetailsContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState({});

  const updateUserDetails = (data) => {
    setUserDetails((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserDetailsContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
}
