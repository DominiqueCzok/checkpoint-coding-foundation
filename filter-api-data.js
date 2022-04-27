function filterApiData(apiData, mandatoryKeys) {    
  let result = [];
  
  for (let i = 0; i < apiData.length; i++) {
    const obj = apiData[i];
    let containsAllKeys = true;
    
    for (let x = 0; x < mandatoryKeys.length; x++) {      
      if (Object.keys(obj).includes(mandatoryKeys[x])) {        
        containsAllKeys = true;
      } else {
        containsAllKeys = false;
        break;
      }
    }
    
    if (containsAllKeys) {
      result.push(obj);
    }
  }
  
  return result;
}