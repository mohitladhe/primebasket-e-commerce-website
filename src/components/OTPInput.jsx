import OtpInput from "react-otp-input";

function OTPInput({ otp, setOtp }) {

  return (

    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span className="mx-1"></span>}
      renderInput={(props) => (
        <input
          {...props}
          className="w-12 h-12 border rounded-lg text-center text-lg focus:border-green-500 outline-none"
        />
      )}
    />

  );

}

export default OTPInput;