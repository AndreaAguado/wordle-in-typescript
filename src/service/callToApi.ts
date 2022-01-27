const callToApi = (word: string) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(response => {
        return response.length;
    })
    .finally(()=>{
        return;
    })
   
}

const objectToExport = {
    callToApi: callToApi,
}

export default objectToExport;