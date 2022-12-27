# Template literals
Template Literals are a new ES2015 / ES6 feature that allows you to work with strings in a novel way compared to ES5 and below.

The syntax at a first glance is very simple, just use backticks instead of single or double quotes:

const a_string = `something`
They are unique because they provide a lot of features that normal strings built with quotes do not, in particular:

they offer a great syntax to define multiline strings
they provide an easy way to interpolate variables and expressions in strings
they allow you to create DSLs with template tags (DSL means domain specific language, and it’s for example used in React by Styled Components, to define CSS for a component)
Let’s dive into each of these in detail.

## Multiline strings
Pre-ES6, to create a string spanning over two lines you had to use the \ character at the end of a line:

const string =
  'first part \
second part'
This allows to create a string on 2 lines, but it’s rendered on just one line:

first part second part

To render the string on multiple lines as well, you explicitly need to add \n at the end of each line, like this:

const string =
  'first line\n \
second line'
or

const string = 'first line\n' + 'second line'
Template literals make multiline strings much simpler.

Once a template literal is opened with the backtick, you just press enter to create a new line, with no special characters, and it’s rendered as-is:

const string = `Hey
this
string
is awesome!`
Keep in mind that space is meaningful, so doing this:

const string = `First
                Second`
is going to create a string like this:

First
                Second
an easy way to fix this problem is by having an empty first line, and appending the trim() method right after the closing backtick, which will eliminate any space before the first character:

const string = `
First
Second`.trim()


## Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

You do so by using the ${...} syntax:

const myVariable = 'test'
const string = `something ${myVariable}` //something test
inside the ${} you can add anything, even expressions:

const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y'}`
