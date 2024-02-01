import profileEs from "../assets/i18n/es.json";
import profileEn from "../assets/i18n/en.json";

import { createContext, useEffect, useState } from "react";

export const TranslateContext = createContext({});

export function TranslateProvider({ children }: any) {
  const [data, setData] = useState<any>(null);
  const [lang, setLang] = useState<string>("es");

  useEffect(() => {
    lang === "es" ? setData(profileEs) : setData(profileEn);
  }, [lang]);

  return (
    <TranslateContext.Provider value={{ data, setData, lang, setLang }}>
      {children}
    </TranslateContext.Provider>
  );
}
