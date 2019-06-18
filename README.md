This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# RevealJS with React

This project is a boilerplate for creating revealJS presentations using React.
All the basic create-react-app commands are available.

## Example

A demo can be found [here](https://cberthou.github.io/revealjs-react-boilerplate/)

## Getting started

Start by cloning the repository
```bash
git clone git@github.com:cberthou/revealjs-react-boilerplate.git
```

then, install dependencies
```bash
yarn install
```

You are ready to go
```bash
yarn start
```

## Configuring

### Syntax highlighting

Syntax highlighting is configured in `src/highlightLanguages.js`. You can set the theme from `highlight.js` and 
load the required languages here.

Then, to create an highlighted code block, you can do :
```javascript
const codeExample = `function aFunction() {
    const value = 10;

    return value;
}`;

return <Lowlight value={codeExample} language="js" />
```

### Changing the theme

To change the CSS theme of your slide deck, you can import the correct reveal.js theme in `App.js`.
```
import 'reveal.js/css/theme/solarized.css';
```

You can also create your own theme. Check the [reveal.js repository](https://github.com/hakimel/reveal.js/) to do so.
