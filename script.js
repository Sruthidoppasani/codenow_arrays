var nos=[10,20,3,4]
var values=[1,2,3.5,true,'rce','aiml']

console.log(nos)
console.log(values)


nos.push(50)
console.log(nos)

nos.push(60)
console.log(nos)

nos.pop()
console.log(nos)

nos.unshift(100)
console.log(nos)

nos.shift(100)
console.log(nos)

nos[3]=50.5
console.log(nos)

//method1
for(let i=0;i<values.length;i++){
   console.log(values[i])
}

//method2
for(let val of values){
    console.log(val)
}

//method3
values.forEach((val,idx)=>{
    console.log(idx,val)
})


//filter
var num=[10,20,34,56,78,90,99,87]
var tmp1=num.filter((val)=>val%2===0)
console.log(num)
console.log(tmp1)

var num=[10,20,34,56,78,90,99,87]
var tmp2=num.filter((val)=>val%2!==0)
console.log(num)
console.log(tmp2)

//map
var num=[10,20,34,56,78,90,99,87]
var tmp3=num.map((val,idx)=>{
    return val*2
})
console.log(num)
console.log(tmp3)

//reduce
var num=[10,20,34,56,78,90,99,87]
var tmp4=num.reduce((total,val)=>total+val,0)
console.log(num)
console.log(tmp4)





//strings
var name1="pravallika"
var city='vijayawada'
var msg=`welcome to js, js is intresting`

console.log(name1,typeof(name1))
console.log(city,typeof(city))
console.log(msg,typeof(msg))

console.log(name1.toUpperCase())

console.log(name1.toLowerCase())

console.log(name1.length)

console.log(msg.replace('js','javascript'))

console.log(msg.replaceAll('js','javascript'))

console.log(city.includes('jay'))

var name2="  java script  "
console.log(name2.length)
console.log(name2.trim(),name2.trim().length)

console.log(name2.trimStart(),name2.trimStart().length)

console.log(name2.trimEnd(),name2.trimEnd().length)

console.log(name1.slice(3,7))

console.log(name1.slice(3))

console.log(name1.charAt(4))
console.log(name1.indexOf('k'))
console.log(name1)




//objects 

var person={
    FullName:"pravallika",
    city:'eluru',
    mobileNo:"9856372528",
    department:'AIML'
}

console.log(person)
//dot and [] notation
console.log(person.FullName)
console.log(person['city'])

//insert,delete,update
person['pincode']=456372
console.log(person)
person['city']='hyderabad'
console.log(person)

delete person.pincode
console.log(person)




//Nested objects

var person={
    fullname:"prabha",
    mobileNo:"9865321567",
    email:'prabha@gmail.com',
    address:{
         houseno:'407-84',
         area:'ashoknagar',
         pincode:776533,
         city:'eluru',
    },
    education:{
        college:{
            name:'rce',
        },
        department:{
            name:'aiml',
            rollno:270,
            cgpa:9.6
        }
    }
}
console.log(person)
console.log(person.address.area)
console.log(person.education.college['name'])
console.log(person.education.department.name)

//array of objects
var student=[
    {
       rollno:101,
       fullname:"abc",
       department:'cse'
    },
    {
        rollno:102,
        fullname:"xyz",
        department:'ece'
    },
    {
        rollno:103,
        fullname:"pqs",
        department:'mech' 
    }
]
console.log(student[2])
console.log(student[1].rollno)
