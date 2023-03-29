# Project 4 - Build a JavaScript Calculator

## About

## Instructions
Create a CodePen.io app that passes all tests and fulfills the listed user stories.
Use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project.

## Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## User Stories
| # | User Story | 
| --- | --- |
| #1 | My calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`. |
| #2 | My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`. |
| #3 | My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`. |
| #4 | My calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`. |
| #5 | My calculator should contain a clickable element with an `id="clear"`. |
| #6 | My calculator should contain an element to display values with a corresponding `id="display"`. |
| #7 | At any time, pressing the `clear` button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`. |
| #8 | As I input numbers, I should be able to see my input in the element with the id of `display`. |
| #9 | In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit `=`, the correct result should be shown in the element with the id of `display`. |
| #10 | When inputting numbers, my calculator should not allow a number to begin with multiple zeros. |
| #11 | When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted. |
| #12 | I should be able to perform any operation (`+`, `-`, `*`, `/`) on numbers containing decimal points. |
| #13 | If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (`-`) sign). For example, if `5 + * 7 =` is entered, the result should be `35` (i.e. `5 * 7`); if `5 * - 5 =` is entered, the result should be `-25` (i.e. `5 * (-5))`. |
| #14 | Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation. |
| #15 | My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like `2 / 7` with reasonable precision to at least 4 decimal places). |

## Reference:
- [Deployment link](https://sdc-fcc-calculator.onrender.com/)
- [Original instructions](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator)