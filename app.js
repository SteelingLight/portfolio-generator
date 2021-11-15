const fs = require('fs');

const generatePage = require('./src/page-template.js')

const profileDateArgs = process.argv.slice(2, process.argv.legnth);

const [type, github] = profileDateArgs;



fs.writeFile('index.html', generatePage(type, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to se the output!');
});