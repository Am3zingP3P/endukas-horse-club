import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/utils/translations';

type Language = 'sr' | 'hu';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (path: string) => string;
  showLangAlert: boolean; // Új: jelezze a popupnak, hogy meg kell jelenni
  closeLangAlert: () => void; // Új: bezárja a popupot
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sr');
  const [showLangAlert, setShowLangAlert] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'sr' ? 'hu' : 'sr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    setShowLangAlert(true); // Popup megjelenítése váltáskor
  };

  const closeLangAlert = () => {
    setShowLangAlert(false);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, showLangAlert, closeLangAlert }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};