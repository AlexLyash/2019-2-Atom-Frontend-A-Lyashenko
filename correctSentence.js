/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  // your solution goes here
  var ans = text.replace(text[0], text[0].toUpperCase());
  if (text[text.length-1] != '.'){
    return ans + '.';
  }
  else{
    return ans;
  }
}

