export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for(let update of queue) {
      if(typeof update === 'function'){
        finalState = update(finalState)
      } else {
        finalState = update
      }
    }
  
    // Return the final state
    return finalState;
  }
  