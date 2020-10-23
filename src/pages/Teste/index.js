import React from 'react';
import { View } from 'react-native';

export default function Teste() {
 return (
/*
map ->
[1,2,3,4,5].map(function(valor){
console.log(valor)
exibir a informação do array ?
})
*/ 
    var person={"first_name":"Tony","last_name":"Hawk","age":31};
    var personJSONString=JSON.stringify(person); 
    
    const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Skip",age:2,favoriteFood:"Steak"}

   <View>

   </View>
  );
}