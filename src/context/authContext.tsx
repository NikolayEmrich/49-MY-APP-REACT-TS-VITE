import React, { createContext, useContext, useState } from 'react'

// Типизация данных по юзеру
interface IUser {
    accessToken: string;
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    refreshToken: string;
    username: string;
}

// Начальное значение для стейт
export const initialUser: IUser = {
    accessToken: '',
    email: '',
    firstName: '',
    gender: '',
    id: 0,
    image: '',
    lastName: '',
    refreshToken: '',
    username: ''
};

// Типизация контекста - данные из стейт по юзеру
interface IAuthContextType {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    // isLoading: boolean;
    // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const AuthContext = createContext<IAuthContextType | undefined> (undefined);

// Обертка над компонентами созданная с поомщью контекста
export const AuthProvider = ({ children }: { children: React.ReactNode; }) => {

    // 1. Переменная содержащая данные по пользователю
    // 2. Функция для изменения значений этой переменной
    const [user, setUser] = useState<IUser>(initialUser);
    // !!! Этот сайт доступен только для всех копмонентов

  return (

        <AuthContext.Provider value={{ user, setUser }}>
      {/* за место чилдрне придут обернутые в провайдер компоненты*/}
      {children}
    </AuthContext.Provider>

  )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('no such context! 😵');
    }
    return context;
  };
