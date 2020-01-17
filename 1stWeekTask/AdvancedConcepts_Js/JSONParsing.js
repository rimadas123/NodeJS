// execute JSON parsing examples => parse means to convert JSON format into Javascript Object

// using async/await to execute this program

async function parseJSONFunc(jsonString){
    const obj = await JSON.parse(jsonString);
    console.log(obj.degree);
    const obj1 = await JSON.parse(jsonString);
    console.log(obj1.name);
}

let data = '{ "name":"rima", "city":"pune", "degree":"MCA"}';
parseJSONFunc(data);

