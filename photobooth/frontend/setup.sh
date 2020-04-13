# Code to setup frontend.

npm init -y

npm i webpack webpack-cli --save-dev

# Add the following to package.json
# "scripts": {
#   "dev": "webpack --mode development ./src/index.js --output ./static/frontend/main.js",
#   "build": "webpack --mode production ./src/index.js --output ./static/frontend/main.js"
# }

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

npm i react react-dom --save-dev

echo "{
    \"presets\": [
        \"@babel/preset-env\", \"@babel/preset-react\"
    ]
}" > .babelrc

echo "module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: \"babel-loader\"
        }
      }
    ]
  }
};" > webpack.config.js

# To be able to use CSS in webpack
npm install --save-dev style-loader css-loader
npm install react-webcam
npm install --save-dev @babel/plugin-proposal-class-properties
