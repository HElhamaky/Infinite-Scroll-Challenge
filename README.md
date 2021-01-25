# Infinite Scroll Challenge using React and Netlify Functions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed to [Netlify](https://www.netlify.com/) using [Netlify-cli](https://docs.netlify.com/cli/get-started/)

## Available Scripts

In the project directory, you can run:

### `Netlify Dev`

Runs the app in the development mode.\
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `Netlify Build`

- You can run builds in Netlify CLI to mimic the behavior of running a build on Netlify — including Build Plugins.
- Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.

### `Netlify Deploy`

This method uploads files directly from your local project directory to your site on Netlify.
If builds are stopped, manual deploys are the only way you can update your site.
A common use case for this command is when you’re using a separate Continuous Integration (CI) tool, deploying prebuilt files to Netlify at the end of the CI tool tasks.
The deploy command needs to know which folder to publish. If your project includes serverless functions, it needs to know the location of the functions folder as well. Netlify CLI will look for this information in in a [netlify.toml](./netlify.toml) file stored at the root of your project directory.
