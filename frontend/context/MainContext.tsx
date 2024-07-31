"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";

type GlobalContextType = {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
}

const GlobalContext = createContext<GlobalContextType>({
  accessToken: null,
  setAccessToken: () => { },
});

export const GlobalContextProvider = ({ children } : { children: ReactNode}) => {

  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{
      accessToken, setAccessToken
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
