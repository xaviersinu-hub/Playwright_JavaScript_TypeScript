// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");  
url.includes("production");
if(url.includes("production")) {
console.log ("Urlcontains production");
}
else{
console.log ("Url contains stage only");
}
// startsWith / endsWith
url.startsWith("https");
url.startsWith("http://"); 
url.endsWith("true"); 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere")); // -1
console.log(url.indexOf("x")); //-1 (not found)
console.log(url.indexOf("r"));
// ASCII -> A -> 65