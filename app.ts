function combine(a: number | string, b: number | string) {
    let result;
    if(typeof a === 'number' && typeof b === 'number') {
       result = a + b;
    }else{
        result = a.toString() + b.toString();
    }

    return result;
  }

  const combinedAge = combine(5, 10);
  console.log(combinedAge);
  const combineName = combine('Shadrack ', 'Osewe')
  console.log(combineName);
  
