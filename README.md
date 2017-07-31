Setting up Jasmine

We will be using Jasmine for unit testing.

* First we need to add Jasmine to our package.json with npm:
npm install --save-dev jasmine

* Next, we'll initialize Jasmine:
./node_modules/.bin/jasmine init

* In package.json, we will configure our scripts to run Jasmine for tests.

"scripts": {
  "test": "jasmine"
}

* This will allow us to run npm test to run all our tests. Later, we'll point our test suite at Karma instead of Jasmine.

Now that Jasmine is set up, let's write some unit tests to make sure our triangle tracker is working correctly. Two passing tests are included in spec/triangle_spec.js.
