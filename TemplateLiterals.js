// handling strins in legacy js 
// const oldStrings = 'abdellah'
const a = 22
const oldStrings = "abdellah \n slimani"

// console.log(oldStrings)

// handling strins in ES2015 +

const newString = `abdellah`
console.log(newString)

//tmrin

const students = [
    {
        name: 'ensa',
        lname: 'fes',
        note: 100
    },
    {
        name: 'abdellah',
        lname: 'slimani',
        note: 0
    },    {
        name: 'someone',
        lname: 'somebody',
        note: 1000
    },
]

const listAll = (studentsList) => {
    studentsList.forEach(({ name, lname, note }) => {
      console.log(`Dear ${name},
  ${name} ${lname} has a note of ${note}.
  Best regards
  `);
    });
  };
  
  listAll(students);