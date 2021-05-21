import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IUserContext {
  name: string;
  updateName(name: string): void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('');

  const updateName = useCallback(async (userName: string) => {
    await AsyncStorage.setItem(
      '@plantManager:UserName',
      JSON.stringify(userName),
    );
    setName(userName);
  }, []);

  useEffect(() => {
    async function fetchName() {
      const nameStored = await AsyncStorage.getItem('@plantManager:UserName');

      if (nameStored) {
        setName(JSON.parse(nameStored));
      }
    }
    fetchName();
  }, []);

  return (
    <UserContext.Provider value={{ name, updateName }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): IUserContext => {
  const context = useContext(UserContext);
  return context;
};

export { UserProvider, useUser };
