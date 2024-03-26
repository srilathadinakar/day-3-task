// 1st task : compare 2 JSON properties

let obj1={
    name:"person1",
    age:5
};
let obj2={
    age:5,
    name:"person1"
}
let str1 = JSON.stringify(obj1,Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2,Object.keys(obj2).sort());
console.log(str1);
console.log(str2);

if(str1===str2){
    console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}


//2nd task display all country flags

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    
    var result = JSON.parse(data);
    
    for(var i=0;i<result.length;i++){
        console.log("Flags:"+result[i].flags.png);
    }
}


//3rd task display all country names, region, sub-region, population

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){
    var data1 = request1.response;
    //console.log(data);
    var result1 = JSON.parse(data1)
    
    for(var i=0;i<result1.length;i++){
        console.log("Country Name:"+result1[i].name.common+" ","Region:"+result1[i].region+" ","Sub-region:"+result1[i].subregion+" ","Population:"+result1[i].population);
    }
}