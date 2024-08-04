import { Input } from "@nextui-org/react";
import React from "react";
import { FaAddressCard } from "react-icons/fa6";

type HandleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

interface EmailInputProps {
  error: string;
  handleChange: HandleChange;
  email: string;
}

function EmailInput(props: EmailInputProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaAddressCard
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Input
          validationBehavior="native"
          required
          type="email"
          name="email"
          className="w-64 md:w-96"
          variant="bordered"
          label="Correo electrónico"
          placeholder="Ingrese su correo electrónico"
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      {props.error && <p className="text-red-500 text-center">{props.error}</p>}
    </div>
  );
}

export default EmailInput;
