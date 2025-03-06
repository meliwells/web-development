const book = { 
    title: "JavaScript Basics",
    edition: 2024,  
    author: { 
        name: "John Doe", 
        social: { 
            twitter: "@johndoe" 
        } 
    } 
}; 
    // Use optional chaining to access the Twitter handle 
    console.log(book.author?.social?.twitter); 
    // Try accessing a non-existent property using optional 
    console.log(book.publisher?.name); 


    /*
    What happens when you try to access book.publisher?.name? returns undefined
    How does optional chaining prevent errors in this scenario? 
    What would happen if we removed ?. in book.publisher?.name? 
*/


//Challenge
if (book?.edition) {
    console.log('Edition year:', book.edition);
} else {
    console.log('No edition');
}