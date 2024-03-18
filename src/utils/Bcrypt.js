// bcrypt.js

import bcrypt from "bcryptjs";

// Hashing function
async function hash(data, saltRounds = 10) {
  try {
    const hash = await bcrypt.hash(data, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
}

// Comparing function
async function match(data, hashedData) {
  try {
    const match = await bcrypt.compare(data, hashedData);
    return match;
  } catch (error) {
    throw error;
  }
}

export default { hash, match };
