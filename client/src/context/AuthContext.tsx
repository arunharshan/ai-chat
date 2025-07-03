import { createContext, useState, useEffect, useContext } from "react";

type AuthToken = {
  id: number;
  name: string;
  email: string;
};
//Define the context type
type AuthContextType = {
  token: AuthToken | null;
  logInUser: (token: AuthToken) => void;
  logOutUser: () => void;
};

// Create the context with default as undefined
const UserAuthorizationContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
const UserAuthorizationProvider = ({ children }: { children: React.ReactNode }) => {
  const LOCAL_STORAGE_KEY = 'ai_chat_login';
  const [token, setToken] = useState<AuthToken | null>(() => {
  const stored = sessionStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const logInUser = (tokenObj: AuthToken) => {
    setToken(tokenObj);
  };

  const logOutUser = () => {
    setToken(null);
  };

  // Save or remove token in sessionStorage
  useEffect(() => {
    if (token) {
      sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
    } else {
      sessionStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [token]);

  return (
    <UserAuthorizationContext.Provider value={{ token, logInUser, logOutUser }}>
      {children}
    </UserAuthorizationContext.Provider>
  );
};

//  Custom Hook . Right way to write a customhook.
export const useAuthorization = () => {
  const context = useContext(UserAuthorizationContext);
  if (!context) {
    throw new Error("useAuthorization must be used within a UserAuthorizationProvider");
  }
  return context;
};

export default UserAuthorizationProvider;
