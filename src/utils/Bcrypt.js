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
async function compare(data, hashedData) {
  try {
    const compare = await bcrypt.compare(data, hashedData);
    return compare;
  } catch (error) {
    throw error;
  }
}

export default { hash, compare };
