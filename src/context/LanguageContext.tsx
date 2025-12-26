import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/utils/translations';

type Language = 'sr' | 'hu';
type Translations = typeof translations.sr;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sr');

  // Nyelv betöltése localStorage-ből
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'sr' ? 'hu' : 'sr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // Segédfüggvény a szövegek eléréséhez (pl. t('header.about'))
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key missing: ${path}`);
        return path;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};