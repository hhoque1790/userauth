const bcrypt = require("bcrypt");

// Create password hashing function below:

const passwordHash = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds); //generating salt
    const hash = await bcrypt.hash(password, salt); // hashing password
    return hash;
  } catch (err) {
    console.log(err);
  }
  return null;
};

passwordHash("hello",20)
.then((hash)=>{
  console.log(hash)
})



/**bcrypt.compare() deduces the salt from the provided hash and is able to then 
 * hash the provided password correctly for comparison.
*/
const comparePasswords = async (password, hash) => {
  try {
    const matchFound = await bcrypt.compare(password, hash); //compat=ring passwords
    return matchFound;
  } catch (err) {
    console.log(err);
  }
  return false;
};