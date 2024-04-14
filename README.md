## Tax Calculator
This is a simple web application that allows users to calculate their taxes based on their income, age, and deductions.

### Overview
The tax calculation is based on the following rules:

- If the overall income (after deductions) is under 8 Lakhs, there is no tax.
- If the income is over 8 Lakhs, the amount over 8 Lakhs is taxed at different rates based on the user's age:
  1) 30% for people under 40 years old
  2) 40% for people aged 40 to 59 (inclusive)
  3) 10% for people aged 60 or older

     
### Features

- Users can input their gross annual income, extra income, age group, and applicable deductions.
- Error handling: Incorrect input values are highlighted with an error icon and tooltip.
- Modal display: After submitting the form, a modal shows the calculated tax amount.


### Test Cases
1) Valid Inputs: Enter valid numeric values for gross annual income, extra income, and deductions. Select an age group and click "Submit". Verify that the modal displays the correct tax amount.

2) Invalid Inputs: Enter non-numeric values for any of the input fields. Verify that error icons appear next to the respective input fields with appropriate error messages.
 
3) Missing Age Group: Select "Select age group" option from the age dropdown and click "Submit". Verify that an error icon appears next to the age dropdown with a message indicating that the age group is mandatory.
   
4) No Tax: Enter values such that the overall income (after deductions) is under 8 Lakhs. Verify that the modal displays a tax amount of 0.


### Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap

### How to Run
Clone this repository to your local machine.

Open `index.html` in a web browser.

### Screenshots of the project and some test cases

1) How the project looks:

   
![Screenshot (157)](https://github.com/varun2123/Fyle-Assignment/assets/116836542/e96d25b2-eeea-4f08-8ca8-c930c2c3fe5d)

2) When hovering on the question mark, it shows information on tooltip:

   
![Screenshot (153)](https://github.com/varun2123/Fyle-Assignment/assets/116836542/5b01c332-5a6f-4390-9d28-1b92efae1750)


![Screenshot (154)](https://github.com/varun2123/Fyle-Assignment/assets/116836542/bbe7a142-851e-4137-8a09-2bf7e2d8336c)

3) When the user gives wrong inputs, the respective error field is highlighted and the error message is shown when hovered on the exclaimation mark icon.

   
![Screenshot (155)](https://github.com/varun2123/Fyle-Assignment/assets/116836542/ec50763a-e304-49dc-9af9-d416d4b7ee1e)


![Screenshot (152)](https://github.com/varun2123/Fyle-Assignment/assets/116836542/87feffdc-2e50-4324-8da3-e4d9a2dc3faa)


4) When the inputs are validated, the calculated tax is shown in a modal.

   
![Screenshot (156)](https://github.com/varun2123/Fyle-Assignment/assets/116836542/44e9594e-f8c0-4f97-8f1e-9d01af4d82c5)
