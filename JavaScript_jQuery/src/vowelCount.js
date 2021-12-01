function getCount(str) {
    var vowelsCount = 0;
    var strarr = function() {
        for(var s in str) {
            str.split();
        }
    }
    // enter your majic here
    for (var i = 0; i < strarr.length; i++){
        if (strarr[i] == 'a'||strarr[i] == 'e' ||strarr[i] == 'i'||strarr[i] == 'o'||strarr[i] == 'u') {
            vowelsCount++;
        }
    }
    return vowelsCount;
  };


//   Return the number (count) of vowels in the given string.
//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
//   The input string will only consist of lower case letters and/or spaces.