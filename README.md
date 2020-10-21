This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# React CV-Display 

A simple project to become more familiar with React state and props. 

Takes simple contact info, education, and experience as input and displays the input upon hitting
the "submit" button. Hitting the "edit" button allows for the user to re-enter the field.


## Areas of Improvement

- Given the amount of reused code for handling the "submit" button on each input component, a
larger template component could have been made to instead render smaller input components as
children such that those smaller components are not responsible for being displayed or not.

- State could have been handled with Redux; given the small nature of this project and its
learning goals, I decided to not implement Redux as originally planned, and will instead take
what I learned from this project to implement it in the next one.

- General styling improvements could have been made across the board.

