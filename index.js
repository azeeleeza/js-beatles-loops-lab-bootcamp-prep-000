function theBeatlesPlay(musicians,instruments){
  var beatlesFacts = []
  for (let i = 0; i < musicians.length && i < instruments.length; i++){
    beatlesFacts += `$(musicians[1]) plays $(instruments)`
    }

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
