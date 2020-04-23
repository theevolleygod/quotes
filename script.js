window.onload = function(){
  //array with the words
  var first = 'A ';
  var adj = ['retarded ', 'shit-for-brain ', 'tyranical ', 'miserable ','crazed ','hideious  ','smelly ','fat ','senile ', 'good-for-nothing ', 'dispicable ' ];
  var noun = ['cunt ','retard ','rapist ', 'whore ', 'cocksucker ', 'maniac ', 'motherfucker ', 'loser ', 'sewer orphan ','ginger ', 'banshee ', 'fuck-head ', 'fuck-ass '];
  var action = ['blew up my', 'killed my ', 'raped my ' , 'kicked my ', 'stole my ', 'shot my ', 'ate my ', 'desolated my ', 'sucked my ', 'banged my ', 'did it for tha '];
  var possetion = ['biscuit ', 'bike ', 'kid ', 'dog ', 'youth ', 'life ', 'children ', 'cunt ', 'girl ', 'monkey ', 'ass ', 'cat '];
  var where = ['at the beach','on some gang shii','at the park', 'at walmart', 'in the sewers', 'outside', '-- now THATs gansta!', 'in the fourth dimension', 'on god', 'fr', 'on some fuck shii', '', '', '', '', '', '', '', '', '', '', '', ''];
  
  // declaring random variables
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //creating a sentence (the excuse)
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}
