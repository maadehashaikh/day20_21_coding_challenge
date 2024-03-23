// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
var text_with_numb = function (text, numb) {
    return ("\"".concat(text, ":").concat(numb, "\""));
};
console.log(text_with_numb("maadeha", 20));
