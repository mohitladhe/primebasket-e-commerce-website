import OtpInput from "react-otp-input";

function OTPInput({ otp, setOtp }) {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      shouldAutoFocus
      renderSeparator={<span className="w-2"></span>}
      containerStyle={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
      }}
      renderInput={(props) => (
        <input
          {...props}
          className="w-12 h-12 text-lg text-center border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
        />
      )}
    />
  );
}

export default OTPInput;
