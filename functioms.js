// function arrangeItems(arr){
//     for (i=0; i<arr.length; i++){
//        // console.log(i+1,arr[i])
//         if (arr[i]=='blue'){
//             console.log('This is ', arr[i])
//         }
//         else{
//             console.log('This is not ', arr[i])
//         }
//     }
// }

// var color=['red','blue','green']
// arrangeItems(color);

//Task 01:
function letterFinder(word, match){
    for(i=0;i<word.length;i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('No match found at', i)
        }
    }
}

letterFinder('test', 't')

console.log(Math.ceil(Math.random*10));