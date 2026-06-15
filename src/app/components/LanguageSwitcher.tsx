"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const cookies = useCookies();
  const currentLocale = useLocale();
  const [isChanging, setIsChanging] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const changeLanguage = (locale: string) => {
    if (locale === currentLocale || isChanging) return;
    
    setIsChanging(true);
    
    // 设置 cookie
    cookies.set("locale", locale, {
      path: "/",
      maxAge: 365 * 24 * 60 * 60, // 1 year
      sameSite: "lax",
    });
    
    // 刷新页面以应用新语言
    router.refresh();
    
    // 重置状态
    setTimeout(() => setIsChanging(false), 1000);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors rounded-lg hover:bg-gray-50"
        aria-label="Change language"
        disabled={isChanging}
      >
        <span className="text-base">{currentLanguage?.flag}</span>
        <span>{currentLanguage?.name}</span>
        <svg 
          className="w-4 h-4 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 hidden hover:block group-hover:block">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${
              language.code === currentLocale
                ? "bg-purple-50 text-purple-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            disabled={isChanging}
          >
            <span className="text-base">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {language.code === currentLocale && (
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;