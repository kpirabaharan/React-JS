var myName = "keesHIgan";

len = myName.length;

console.log("Length of myName " + len);

console.log(myName.slice(0,1)); // Prints first Letter
console.log(myName.slice(0,6)); // Prints first 6 Letter

console.log(myName[0].toUpperCase() + myName.slice(1,len).toLowerCase()); // To uppercase
