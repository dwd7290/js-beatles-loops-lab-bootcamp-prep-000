function theBeatlesPlay(musicians, instruments) {
  var tmp = [];
  
  for (i=0; i<musicians.length; i++) {
    tmp[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return tmp;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
}

function iLoveTheBeatles(number) {
  var tmp = [];
  do {
    tmp.push("I love the Beatles!");
    number++
  } while (number < 15);
  
  return tmp;
}