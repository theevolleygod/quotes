window.onload = function(){
  //array with the words
  var first = 'A ';
  var adj = ['retarded ', 'dirty little ', 'kold-blooded ', 'shit-for-brain ', 'tyranical ', 'bitter ', 'miserable ', 'leftist ', 'bigotted ', 'cis-gendered ', 'crazed ','hideious ','smelly ','fat ','senile ', 'good-for-nothing ', 'dispicable '];
  var noun = ['cunt ','retard ','rapist ', 'psycho ', 'democrat ', 'jew ', 'antifa ', 'whore ', 'feminist ', "women's rights activist ", 'SJW ', 'cocksucker ', 'maniac ', 'mofugga ', 'loser ', 'mudshark', 'sewer orphan ','hebephile ', 'bitch nigga ', 'real nigga ', 'fuck-ass '];
  var action = ['blew up my ', 'killed my ', 'raped my ', 'broke my ', 'kicked my ', 'twerked on my ', 'listened to my ', 'whispered to my ', 'stomped my ', 'stole my ', 'shot my ', 'rode my ', 'ate my ', 'shitted on my ', 'desolated my ', 'sucked my ', 'banged my '];
  var possetion = ['biscuits ', 'bike ', 'kids ', 'dog ', 'youth ', 'mind ', 'hopes and dreams ', 'sanity ', 'life ', 'children ', 'cunt ', 'girl ', 'ass ', 'cat ', 'gang shit'];
  var where = ['at the beach','at the park', 'on the curb ', 'outside', '-- now THATs gansta!', 'in the fourth dimension', 'on god', 'fr', '', ' WTF', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  
  // declaring random variables
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //creating a sentence (the excuse)
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}
