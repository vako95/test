import { createContext, useState} from "react";
import { LanguageColection } from "../../Lang/LanguageCollection";
const LaguageContext = createContext();


const LanguageProvider = (children) => {
 const [currentLanguage,setcurrentLanguage] = useState('en')

 const changeLanguage = (lang) => {
        setcurrentLanguage(lang)
 }
 const getTranslate = (key) => {
    return LanguageColection[key][currentLanguage]
 }
    return(
        <LaguageContext.Provider value={{getTranslate}}>
            {children}
        </LaguageContext.Provider>
    )
}

export default LanguageProvider;