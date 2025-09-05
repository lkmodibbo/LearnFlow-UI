import React, { createContext, useState } from "react";

// Create a new context to hold user data
 const UserContext = createContext(null);

// This is the provider component that will wrap around parts of your app that need access to user data
export const UserProvider = ({ children }) => {
  // State to store user information (can be null or an object like {name, course})
  const [userData, setUserData] = useState(null);

  const updateProfile = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  // Provide the userData and functions to any component that needs it
  return (
    <UserContext.Provider value={{ userData, setUserData, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext
