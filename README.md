# Lush.js
[![Build Status](https://travis-ci.org/designing-experiences/Lush.js.svg?branch=master)](https://travis-ci.org/designing-experiences/Lush.js)
[![Dep Status](https://david-dm.org/designing-experiences/Lush.js/status.svg)](https://david-dm.org/designing-experiences/Lush.js)
[![Dev Dep Status](https://david-dm.org/designing-experiences/Lush.js/dev-status.svg)](https://david-dm.org/designing-experiences/Lush.js)<br>
![NPM](https://nodei.co/npm/Lush.js.png?downloads=true "NPM")

Lush.js is a Javascript framework for online service blueprinting. Lush uses its own HTML tags that you can add to any website or web application.
Lush.js reads (Lush Markdown)[#Lush-Markdown].

### Table of Contents
- Lush Markdown
- Initiate Lush.js
- Using Lush.js
- Using presentation mode
- Using Lush.js options
- Lush elements
- Testing Lush

### Lush Markdown
Lush Markdown is regular markdown extended with service blueprint terminology. Lush Markdown uses the dollar (`$`) sign to indicate a markdown attributes.

Lush Markdown attributes:
- `$ Project` = Project name, only first one provided will be used
- `$ Scenario` = Creates Swiminglane
- `$ Step Definition`	= A plain words description of what happens in the step
- `$ Channel` = The what of the step's interaction
- `$ Actor` = The journey and/or support actors of the step
- `$ API, System` = What makes this step "go". APIs, hardware, processes, systems
- `$ Observation, Fact`	= Statements that are important to note
- `$ Policy, Rule` = Policies that dictate why something is a certain way
- `$ Metric` = Metrics that help you illuminate the step's context or importance
- `$ Critical Moment` = Sources of pain or experience breakdown
- `$ Question` = Questions that need to be asked
- `$ Idea` = Ah-ha realizations on things to improve or fix for broader impact

### Initiate Lush.js
Lush.js can be added directly to any web application:
```html
<script src="lush.min.js"></script>
```
It will generate the Lush HTML elements that can be used in the browser

### Using Lush.js
Lush has two main functions.
```js
markdown2lush( STRING_WITH_LUSH_MARKDOWN )
```

```js
lush2markdown( STRING_WITH_TITLE, STRING_WITH_SCENARIO, LUSH_ELEMENT_OBJECT ); // example: $('lush')
```

### Using presentation mode
You can add a button with the id `lush-prezi`

Example:
```html
<button id="lush-prezi">Click here for presentation mode</button>
```

Clicking the button will open lush in full screen presentation mode.

**Clicker support**: Lush also supports basic clicker support

The markdown can be added directly to the lush element.
```html
<lush>
$ Service
NAME OF THE SERVICE

	$ Scenario
	INFO ABOUT SCENARIO

		$ Step Definition
		# Title

		$ Channel
		# Title

		$ Actor
		# Title

		$ API, System
		# Title

		$ Observation, Fact
		# Title

		$ Policy, Rule
		# Title

		$ Metric
		# Title

		$ Critical Moment
		# Title

		$ Question
		# Title

		$ Idea
		# Title

	$ Scenario another scenario
</lush>
```

#### Styling Lush
Lush can be styled like any other HTML element. Lush has a set of shadow DOM properties set. You can simply overwrite these by styling them (see a list of available elements below)

Also see the file: examples/styled.html

### Lush elements
When you add Lush.js to your page, a few elements will be added to the shadow dom. You can use these elements directly, but you don't have too.

```html
<lush-row>    <!-- lush will create a row that contains all the columns -->
<lush-column> <!-- a column per step -->
<lush-layer>  <!-- a layer, example: Metric or Touchpoint -->
<lush-content><!-- the content of the latyer -->
```

The following elements are stylable but it would not be adviced to overwrite the shadowdom elements
```html
<lush>        <!-- lush canvas element, avoid styling of this element -->
```

### Testing Lush
You can test Lush by running `npm test`.

Lush is tested using [Selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) and the  [PhantomJS](https://www.npmjs.com/package/phantomjs) driver (for Travis testing). You might want to install these globally (see the links).

The Selenium Webdriver comes with Firefox support, you can change the the driver in the testfile from PhantomJS to Firefox (or install additional drivers [more info](http://www.seleniumhq.org/download/))

Lush's `npm install` installs support for testing in PhantomJS, Chrome and Firefox
