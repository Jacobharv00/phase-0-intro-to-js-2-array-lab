const cats = [ 'Milo', 'Otis', 'Garfield' ]

// Destructive Functions
const destructivelyAppendCat = ( name ) => cats.push( name )

const destructivelyPrependCat = ( name ) => cats.unshift( name )

const destructivelyRemoveLastCat = ( name ) => cats.pop( name )

const destructivelyRemoveFirstCat = ( name ) => cats.shift( name )


// Non-Destructive Functions
const appendCat = ( name ) => {
  let newArray = [ ...cats ]
  newArray.push( name )
  return newArray
}

const prependCat = ( name ) => {
  let newArray = [ ...cats ]
  newArray.unshift( name )
  return newArray
}

function removeLastCat ( name ) {
  let newArray = [ ...cats ]
  newArray.pop( name )
  return newArray
}

function removeFirstCat ( name ) {
  let newArray = [ ...cats ]
  newArray.shift( name )
  return newArray
}
