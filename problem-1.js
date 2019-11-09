// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function hashGen(params) {
  let strings =  params.charAt(0).toUpperCase() + params.slice(1);
  let getRidSpace = strings.split(" ").join()
  if (params.length >=140  ||  strings.length<=0) {
     return false
  }
return ('#'+getRidSpace);

}
