This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# calculator-ui
A Simple Calculator UI React and Redux


## Steps to run in Development mode
Open cmd and Clone repo using `git clone https://github.com/akhilpallikonda/calculator-ui.git`

Navigate to folder 'calculator-ui' and run below command.
`npm install` 

In the project directory, you can run to start the app:

### `npm start`

Runs the app in the development mode :

 To Run the app using [https://github.com/akhilpallikonda/calculator-api](Calculator-Api) Service, 
    Clone [https://github.com/akhilpallikonda/calculator-api](Calculator-Api) the repo and start the service on port 3030.
    Then Open [http://localhost:3000](http://localhost:3000) to view calculator ui in the browser.
 To Run the app without using Api Service,
    Change [https://github.com/akhilpallikonda/calculator-ui/blob/main/src/features/calculator/calculatorAPI.js#L4](calculatorAPI.js#L4)to use `mockGetCalculatorResultAPI` function instead of `getCalculatorResultAPI`.
    Then Open [http://localhost:3000](http://localhost:3000) to view calculator ui in the browser.