const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
       let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    rl.close(); 

});

/*PS C:\Users\xavie\OneDrive\Desktop\Playwright_Lesson1_.JavaScript_Code> cd 08_chapter_UserInput
PS C:\Users\xavie\OneDrive\Desktop\Playwright_Lesson1_.JavaScript_Code\08_chapter_UserInput> node 60_Node_UI.js
Enter a number: 17
17 is Odd
PS C:\Users\xavie\OneDrive\Desktop\Playwright_Lesson1_.JavaScript_Code\08_chapter_UserInput>  */
