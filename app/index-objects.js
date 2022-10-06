const student = {
  firstName: "Gordo",
  lastName: "Ram",
  nickName: "Gogo",
  age: 134,
  isWise: true,
  "batch name": "asparagus",
  "dynamic content": true,
};

// READING & Using the properties of the object
const fullName = `${student.firstName} '${student.nickName}' ${student.lastName}`;
console.log({ fullName });

// ADDING a new property in the object
student.location = "Earth";
console.log({ student });

// REMOVING/DELETING properties from the object
student.propertyToBeRemoved = null;
console.log({ student });
delete student.propertyToBeRemoved;
console.log({ student });

// ALTERNATIVE WAYS TO ACCESS properties of an object
// min 48:30 onwards - OBSERVATION for using []; see the example below;
// the "batch name" property could not be access using the .notation
console.log("The Batch Name is: ", student["batch name"]);
// +
// using [] notation, we can read DYNAMIC VALUES
const dynamicProperty = "dynamic content";
console.log(
  "This property is accessed using [] notation ",
  student[dynamicProperty]
);
// +
// using [] notation allow to do COMPUTATIONS BEFORE ACCESSING THE PROPERTY
const dynamic = "dynamic";
console.log(
  "Using [] notation we can do computations before accessing the property ",
  student[dynamic + " content"]
);

// CHANGE a property in an object
student["batch name"] = "donkey";
console.log({ student });

// ADD PROPERTIES CONDITIONALLY
// we want to be able to change the  "hasDrivingLicence" property which is initially set to false
// +
// we want to create a new property "hasScooterLicence" based on the age
student.hasDrivingLicence = false;
student.age = 13;
const newProperty =
  student.age > 18 ? "hasDrivingLicence" : "hasScooterLicence";
student[newProperty] = true;
console.log({ student });

// ANOTHER EXAMPLE - when someone inputs the letter she wants an example for, form the dictionary
const dictionary = {
  a: "alumni",
  b: "banana",
  c: "cokonut",
};
let favoriteLetter = "c";
const searchedLetter = dictionary[favoriteLetter];
if (searchedLetter !== undefined && typeof searchedLetter !== "number") {
  console.log(`This is the whole ${dictionary}`);
  console.log(
    `The example for the ${favoriteLetter} letter you inputted is: ${searchedLetter}`
  );
} else {
  console.log(
    "The letter you're searching is NOT yet in the dicitonary OR has not yet been defined OR is not a string"
  );
}

// CLONING OBJECTS:
// 02h:30min - onwards in the video
// The WRONG WAY because objects go by REFERENCE:
const student2 = student;
console.log({ student2 });
// if we try to change the location in student2, the location
student2.location = "Mars";
console.log({ student });
// The CORRECT WAY using Object.assign
const student3 = Object.assign({}, student);
console.log({ student3 });

// NESTING AN OBJECT INSIDE ANOTHER OBJECT
student3.address = {
  street: "Rahova No.1",
  city: "Roma",
};
console.log({ student3 });

// CLONING NESTED OBJECTS WITHIN OBJECTS
const student4 = Object.assign({}, student3);
console.log({ student4 });
// we want to create a new address object in student4 in order to be able to edit it
student4.address = {};
console.log({ student4 });
// we clone only the address object from student3 to student4
Object.assign(student4.address, student3.address);
console.log({ student4 });
// we want to change the address object in student4 without affecting student3
student4.address.street = "Malamu No.3";
student4.address.city = "Macao";
console.log({ student3 });
console.log({ student4 });
console.log(
  "This is how we can safely, correctly clone objects and nested objects"
);
