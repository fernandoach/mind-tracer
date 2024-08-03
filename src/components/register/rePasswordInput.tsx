import { Input } from "@nextui-org/react";
import React from "react";
import { FaEye, FaEyeLowVision, FaLock } from "react-icons/fa6";

type HandleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

interface RePasswordInputProps {
  error: string;
  handleChange: HandleChange;
  rePassword: string;
}

function RePasswordInput(props: RePasswordInputProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaLock
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Input
          validationBehavior="native"
          required
          type={isVisible ? "text" : "password"}
          name="rePassword"
          className="w-64 md:w-96"
          variant="bordered"
          label="Re-contraseña"
          placeholder="Repita su contraseña"
          value={props.rePassword}
          onChange={props.handleChange}
          endContent={
            <button className="h-full focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible ? (
                <FaEyeLowVision className="text-2xl h-max text-default-400 pointer-events-none" />
              ) : (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>
      {props.error && <p className="text-red-500 text-center">{props.error}</p>}
    </div>
  );
}

export default RePasswordInput;
