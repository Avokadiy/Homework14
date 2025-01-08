import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'
import { createContext, Dispatch, useState } from 'react';
import './App.css'

type ContextType = {
    theme: string;
    setTheme: Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextType | null>(null);

export default function App() {
      const [theme, setTheme] = useState('light');

    return(
    <ThemeContext.Provider value={{theme :theme, setTheme}}>
        <div className={`container ${theme}`}>
            <Header />
            <Main />
            <Footer />
        </div>
    </ThemeContext.Provider>
)}
  
