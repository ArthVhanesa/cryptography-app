import scrypt_module_factory from "@/utils/js-scrypt";
import { data } from "autoprefixer";
import daisyui from "daisyui";

async function hash(data, salt, keyLength, cost, blockSize, parallelization) {
  if (!keyLength) keyLength = 64;
  var hash = "";
  scrypt_module_factory(function (scrypt) {
    var dataUTF8 = scrypt.encode_utf8(data);
    var saltUTF8 = scrypt.encode_utf8(salt);
    var hashedDataUTF8 = scrypt.crypto_scrypt(
      dataUTF8,
      saltUTF8,
      cost,
      blockSize,
      parallelization,
      keyLength
    );
    hash = scrypt.to_hex(hashedDataUTF8);
  });
  return hash;
}

async function compare(
  hashValue,
  data,
  salt,
  keyLength,
  cost,
  blockSize,
  parallelization
) {
  try {
    const dataHash = await hash(
      data,
      salt,
      keyLength,
      cost,
      blockSize,
      parallelization
    );
    return hashValue === dataHash;
  } catch (error) {
    throw error;
  }
}

export default { hash, compare };
