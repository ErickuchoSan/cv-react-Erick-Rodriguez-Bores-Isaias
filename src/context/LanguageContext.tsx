/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { isLang, type Lang } from '../i18n/lang';
import { translations } from '../i18n/translations';

const DEFAULT_LANG: Lang = 'es';
const URL_PARAM = 'lang';

interface LanguageContextType {
    language: Lang;
    setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** `?lang=en` makes a shareable link that opens in English. */
function languageFromUrl(): Lang {
    const requested = new URLSearchParams(window.location.search).get(URL_PARAM);
    return isLang(requested) ? requested : DEFAULT_LANG;
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Lang>(languageFromUrl);

    // Keep the document in sync: screen readers pick the pronunciation from <html lang>
    // (WCAG 3.1.1), and the URL keeps the choice on reload or when the link is shared.
    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translations[language].meta.title;
        const url = new URL(window.location.href);
        if (language === DEFAULT_LANG) url.searchParams.delete(URL_PARAM);
        else url.searchParams.set(URL_PARAM, language);
        window.history.replaceState(window.history.state, '', url);
    }, [language]);

    const value = {
        language,
        setLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
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
