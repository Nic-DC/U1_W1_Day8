const student = {
  firstName: "Gordo",
  lastName: "Ram",
  nickName: "Gogo",
  age: 134,
  isWise: true,
  "batch name": "asparagus",
  "dynamic content": false,
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
