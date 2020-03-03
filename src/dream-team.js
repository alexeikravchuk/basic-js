module.exports = function createDreamTeam(members = []) {
  if(!members || !members[0]) return false;
  let lettersArr = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === 'string' && members[i].trim()) {
      lettersArr.push(members[i].trim()[0].toUpperCase());
    }
  }
  lettersArr.sort();
  return lettersArr.reduce((r, v) => r + v, '');
};