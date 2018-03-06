function theBeatlesPlay(musicians,instruments){
  var beatlesFacts = []
  for (let i = 0; i < musicians.length && i < instruments.length; i++){
    beatlesFacts += `$(musicians[i]) plays $(instruments[1])`
    }
    return beatlesFacts

}

function johnLennonFacts(array){
  var johnLennonFacts = []
  while (i < array.length) {
        johnLennonFacts += array[i]+"!"
        i--
    }
    return johnLennonFacts
}

function iLoveTheBeatles(number){
  var howMuch = []
  do{
    howMuch+="I love the Beatles!"
  }  while(number < 15)
}
