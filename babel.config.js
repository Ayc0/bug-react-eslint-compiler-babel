module.exports = {
  // If either of those 2 is setup, ESLint stops reporting the error in Component.tsx
  // This seems to only work with `babel.config.js`, not `.babelrc`, but I may be wrong
  root: true,
  plugins: ["@babel/plugin-proposal-class-properties"],
};
