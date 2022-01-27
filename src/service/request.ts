// import callToApi from "./callToApi";
import { WORDS } from "./words";

const getWords = () => {
    return WORDS;
}

export const getWordOfTheDay = () => {
    const words = getWords();
    const wordOfTheDay = words[getDayOfTheYear()];
    return wordOfTheDay.toUpperCase();
}

export const isValidWord = async (word: string) => {
    // const words = getWords();
    // const aux = callToApi.callToApi(word);
    // console.log(aux);    
    // return words.includes(word.toLocaleLowerCase());
   try {
       const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
       const response = await fetch(URL);
       const json = await response.json();
       if (response.status !== 200) throw new Error("Request Failed");
       return json.length;
    }
    catch (e){
        return false;
    }
}

const getDayOfTheYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff =
      (now as any) -
      (start as any) +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}