/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
const positiveArray = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
const profile = {
  name: "Name",
  surname: "Sur",
  "email address": "ns@epicode.com",
  age: 121,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
profile.hasDrivingLicence = true;
console.log(profile.hasDrivingLicence);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
delete profile.age;
console.log({ profile });

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
const profile2 = {
  name: "Name2",
  surname: "Sur2",
  "email address": "ns2@epicode.com",
  age: 1212,
};
if (profile2["email address"] !== profile["email address"]) {
  console.log("The profiles have different email addresses");
} else {
  console.log("The profiles have the same email address");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
let totalShoppingCart = 45;
const shipping = 10;
let totalPayment =
  totalShoppingCart > 50 ? `free shipping` : `shipping cost: $${shipping}`;
console.log({ totalPayment });
if (totalPayment === `free shipping`) {
  console.log(
    `Total cost is: $${totalShoppingCart} [because you have ${totalPayment}]`
  );
} else if (totalPayment === `shipping cost: $${shipping}`) {
  console.log(
    `Total cost is: $${
      totalShoppingCart + shipping
    } [because you have your cart cost: $${totalShoppingCart} & shipping cost: $${shipping}]`
  );
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
const discount = 0.2;
const discountMessage = "20% discount on all Black Friday purchases :)";
if (totalPayment === `free shipping`) {
  console.log(
    `Total cost is: $${
      totalShoppingCart - totalShoppingCart * discount
    } [because you have ${totalPayment} AND ${discountMessage}]`
  );
} else if (totalPayment === `shipping cost: $${shipping}`) {
  console.log(
    `Total cost is: $${
      totalShoppingCart + shipping - totalShoppingCart * discount
    } [because you have your cart cost: $${totalShoppingCart} & shipping cost: $${shipping} BUT ${discountMessage}]`
  );
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
const car = {
  brand: "Dacia",
  model: "Sandero",
  licensePlate: "RO 431 FUN",
};
const car2 = Object.assign({}, car);
car2.licensePlate = "RO 432 FUN";
const car3 = Object.assign({}, car);
car3.licensePlate = "RO 433 FUN";
const car4 = Object.assign({}, car);
car4.licensePlate = "RO 434 FUN";
const car5 = Object.assign({}, car);
car5.licensePlate = "RO 435 FUN";
const car6 = Object.assign({}, car);
car6.licensePlate = "RO 436 FUN";
console.log({ car5 });

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
let carsForRent = [car, car2, car3, car4, car5, car6];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
const firstCarRemoved = carsForRent.shift();
console.log({ firstCarRemoved });
const lastCarRemoved = carsForRent.pop();
console.log({ lastCarRemoved });

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log(typeof car);
console.log(typeof car.licensePlate);
console.log(typeof car.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
let carsForSale = [];
carsForSale.push("ARO");
carsForSale.push("OLTCIT");
carsForSale.push("TIR");
console.log({ carsForSale });
let totalCars = carsForRent.concat(carsForSale);
console.log({ totalCars });

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
for (let i = 0; i < carsForSale.length; i++) {
  let carData = carsForSale[i];
  console.log("The brand info: ", carData.brand);
  console.log("The model info: ", carData.model);
  console.log("The licensePlate info: ", carData.licensePlate);
}

for (let i = 0; i < totalCars.length; i++) {
  let carData = totalCars[i];
  console.log("The brand info: ", carData.brand);
  console.log("The model info: ", carData.model);
  console.log("The licensePlate info: ", carData.licensePlate);
}
