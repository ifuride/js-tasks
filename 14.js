//On the reddit site, links to sections are formed as follows: https://reddit.com/r/section_name/ 
//Write a function that takes a link to a section and returns the title of the section.
function getSubredditName(link) {
    let splitArr = link.split('/')
    for (let i = 0; i < splitArr.length; i++) {
        if (splitArr[i] === 'r') {
            return splitArr[i + 1].replace('_', ' ');
        }
    }
}
console.log(getSubredditName('//https://reddit.com/r/section_name/'));
