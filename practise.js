// JavaScript Assignment2

// 1.	Create a Date object with the current date and change the year to 2000. Print the updated date.

let currentDate = new Date()
currentDate.setFullYear(2000)
console.log("Updated Date" + " " + currentDate)


// 2. Set the year of today’s date 5 years ahead from the current year

let futureDate = new Date()
futureDate.setFullYear(futureDate.getFullYear() + 5)
console.log("Date 5 years ahead" + " " + futureDate)


// 3. Change the month of the current date to December and display the result.

let decemberDate = new Date()
decemberDate.setMonth(11)
console.log("Updated Date" + " " + decemberDate)


// 4. Function to greet a person

function greet() {
    return "Hello Saba"
}
console.log(greet())


// 5. Function to add two numbers

function add(num1, num2) {
    return num1 + num2
}
console.log("Sum" + " " + add(5, 10))


// 6. Function to multiply three numbers

function multiply(num1, num2, num3) {
    return num1 * num2 * num3
}
console.log("Product" + " " + multiply(2, 3, 4))


// 7. Function to double a number

function doubleno(num) {
    return num * 2
}
console.log("Double of 2" + " " + doubleno(2))


// 8. Function to get full name

function getFullName(firstName, lastName) 
{
    return firstName + " " + lastName
}
console.log(getFullName("Saba", "Bibi"))