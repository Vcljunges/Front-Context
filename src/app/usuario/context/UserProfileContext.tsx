"use client";

import { createContext, useContext } from "react";

type UserProfileContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const UserProfileContext = createContext<UserProfileContextType>({
  userName: "",
  setUserName: () => {},
});

type UserProfileProviderProps = {
  children: React.ReactNode;
  userName: string;
  setUserName: (name: string) => void;
};

export function UserProfileProvider({ children, userName, setUserName }: UserProfileProviderProps) {
  return (
    <UserProfileContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  return useContext(UserProfileContext);
}
