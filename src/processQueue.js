export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for(let update of queue) {
      if(typeof update === 'function'){

      } else {
        
      }
    }
  
    return finalState;
  }
  