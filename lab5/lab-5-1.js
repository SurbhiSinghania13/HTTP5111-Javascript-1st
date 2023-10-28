//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject={
    name:'surbhi',
    age:24,
    phone:1234,
    address:"124 ardwick",
    fun:function(){
        alert("My name is " + meObject.name + " and my age is " + meObject.age);
    }
}
console.log(meObject);
//alert("My name is " + meObject.name + " and my age is " + meObject.age);
meObject.fun();