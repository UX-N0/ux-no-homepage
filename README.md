# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





<div className='container'>
    <h1>What is UX-NO</h1>
    <p> UX-NO is a web app inspired by recent events, that aims to provide the public with necessary information about the dangers of UXO's. UXO's are unexploded ordinance that are left over from conflict zones. This UXO's pose a threat to the general public once the area has been de-ocupied or the conflict has ended. </p>
  </div>
  <div className='container'>
    <h2> Why is this app important</h2>
    <p> This app is important to help the people that go back to their normal lives once a conflict has ended. This app will provide information on safety and the ability to report UXO's so that the local authorities can deal safely with the UXO.</p>
  </div>
  <div className='container'>
    <h2>Contact:</h2>
  </div>


            <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-circle-info"></i>
          <i class="fa-solid fa-envelope"></i>



          navbar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 15vh;
  width: 100%;
  background-color: rgba(0, 224, 234, 1);
  color: black;
  img {
    height: 60px;
    display: flex;
    align-self: center;
    opacity: .9;
    background-color: rgb(255, 255, 240, 1);
  }
  i {
    font-size: 20px;
    color: rgb(4, 171, 190);
    align-self: center;
  }
  @media screen and (min-width: 379px) {
    img {
      height: 70px;
    }
    i {
      font-size: 30px;
    }
  }
  
  @media screen and (min-width: 700px){
    img {
      height: 80px;
    }
    i {
      font-size: 40px;
    }
  }
  
  @media screen and (min-width: 1280px){
    
  }
}
