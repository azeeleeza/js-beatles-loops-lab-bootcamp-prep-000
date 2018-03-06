function theBeatlesPlay(musicians,instruments){
  var beatlesFacts = []
  for (let i = 0; i < musicians.length && i < instruments.length; i++){
    beatlesFacts.push(musicians[i] + " plays " + instruments[i])
    }
    return beatlesFacts

}
