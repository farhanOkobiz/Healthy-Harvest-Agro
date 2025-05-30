const otpGenerator = require('otp-generator');

const OTPGenerate = (title) => {
  const OTP = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  return OTP;
};

module.exports = OTPGenerate;
