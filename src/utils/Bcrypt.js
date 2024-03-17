// bcrypt.js

import bcrypt from "bcryptjs";

// Encryption function
async function encrypt(data, saltRounds = 10) {
  try {
    const hash = await bcrypt.hash(data, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
}

// Decryption function
async function decrypt(data, hashedData) {
  try {
    const match = await bcrypt.compare(data, hashedData);
    return match;
  } catch (error) {
    throw error;
  }
}

export default { encrypt, decrypt };
