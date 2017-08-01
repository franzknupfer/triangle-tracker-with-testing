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

Note that we can also create a SpecRunner.html file to prettify how our test results look. Jasmine doesn't have a built-in test runner, so if we're using Jasmine on its own, we need to rely on the Jasmine node module's helper code or a SpecRunner.html file to output our tests. We'll be using another popular tool called Karma to run our tests, but you may also want to try out using a SpecRunner.html file on your own.

Setting up Karma

Karma is another tool we can use to provide robustness to our unit testing. Jasmine itself doesn't come with a built-in test runner, though the node module for Jasmine has helper code that lets us run our specs in the command line. (We can also use a SpecRunner.html file as well.) We can also use Karma to test our source code in different browsers.

npm install karma --save-dev

npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev

Note that we are just testing chrome with karma, but you can also install other browser launchers as well.

npm install -g karma-cli

We can configure karma with the command karma init. (More on karma init configuration here.)

Next, let's point our tests at karma. In package.json, change the script for testing to the following:

"scripts": {
  "test": "karma start karma.conf.js"
},

This way, we can type npm test and karma will run our tests. However, our tests won't work yet.

We are going to need some additional npm packages as well.

First, karma will need to browserify our files, since the browser can't understand require statements and our code is separated into different modules.

npm install karma-browserify --save-dev

Next, we need to set up karma and jasmine to play well together:

npm install karma-jasmine --save-dev

We also need to add a plugin that allows karma to understand jquery:

npm install karma-jquery --save-dev

Here's what our package.json should look like. You can use this file and then run npm install to automatically install all necessary packages.

Now that we have the packages we need, let's configure karma. We'll do this in karma.conf.js.

First, we'll need to add the frameworks we're using. Currently, we're using jquery, jasmine, and browserify. Next, we include the files that karma needs to run. We can use a globbing pattern for this or even manually include them if needed.

Next, we'll need to specify which files need preprocessing. Since our JS files are using modules, we need them to be browserified. We also need to specify the plugins we're using (note that the plugins are the npm packages we just installed).

We also need to specify the browserify configuration [ADD MORE HERE].

At this point, we can run npm test and our tests will be run through karma. We can still use console.log and debugger to debug our code as well.

SOMEWHERE IN LESSON, ADD BEST PRACTICES FOR INSTALLING NPM PACKAGES:
1. Only when needed
2.
