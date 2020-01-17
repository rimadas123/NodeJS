//Read / write file using async/await 


//read a file => old way

// const fs = require('fs');

// fs.readFile('file.txt', (error,data) => {
//     if(error) throw error;
//     console.log(data); //contents of file.txt
// });


// read a file => using async/await

const fs = require('fs').promises;

//     async function fileRead(){
//         try{
//             const data = await fs.readFile('file.txt');
//             console.log(data);
//         } catch(error){
//         console.log(error);
//     }
// }

// fileRead();


//write a file => old way

// const data = "console.log('hello world')";

// fs.writeFile('file.txt', data, (error) => {
//     if(error) throw error;
//     console.log('The file.txt has been saveed!');
// })



    async function fileWrite(){
        
        try{
            const data = "hello world! how are you today!";
            await fs.writeFile('file.txt',data);
        }catch(error){
            console.log(error);
        }
    }
    fileWrite();