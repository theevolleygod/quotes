window.onload = function(){
  //array with the words
  var first = 'A ';
  var adj = ['retarded ', 'dirty little ', 'kold-blooded ', 'shit-for-brain ', 'tyranical ', 'bitter ', 'miserable ', 'leftist ', 'misanthropic ', 'cis-gendered ', 'crazed ','hideious  ','smelly ','fat ','senile ', 'good-for-nothing ', 'dispicable '];
  var noun = ['cunt ','retard ','rapist ', 'psycho ', 'democrat ', 'jew ', 'antifa ', 'whore ', 'feminist ', "women's rights activist ", 'SJW ', 'cocksucker ', 'maniac ', 'motherfucker ', 'loser ', 'sewer orphan ','ginger ', 'banshee ', 'fuck-head ', 'fuck-ass '];
  var action = ['blew up my ', 'killed my ', 'raped my ', 'broke ', 'kicked my ', 'twerked on my ', 'stomped my ', 'stole my ', 'shot my ', 'rode my ', 'ate my ', 'shidded on my ', 'desolated my ', 'sucked my ', 'banged my ', 'did it for tha '];
  var possetion = ['biscuits ', 'bike ', 'kid ', 'dog ', 'youth ', 'mind ', 'hopes and dreams ', 'life ', 'children ', 'cunt ', 'girl ', 'ape ', 'ass ', 'cat '];
  var where = ['at the beach',', on some gang shii','at the park', 'on the curb ', 'in the sewers', 'outside', '-- now THATs gansta!', 'in the fourth dimension', 'on god', 'fr', '', ' WTF', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  
  // declaring random variables
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //creating a sentence (the excuse)
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}
