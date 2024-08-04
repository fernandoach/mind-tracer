import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { FaTransgender } from "react-icons/fa6";

type handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;

interface GenderInputProps {
  error: string;
  handleChange: handleGenderChange;
  gender: string;
}

function GenderInput(props: GenderInputProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaTransgender
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Select
          aria-label="Género"
          label="Género"
          required
          variant="bordered"
          className="w-64 md:w-96"
          placeholder="Ingrese su género"
          name="gender"
          onChange={props.handleChange}
          value={props.gender}
        >
          <SelectItem key={"M"} value="M">
            Masculino
          </SelectItem>
          <SelectItem key={"F"} value="F">
            Femenino
          </SelectItem>
        </Select>
      </div>
      {props.error && <p className="text-red-500 text-center">{props.error}</p>}
    </div>
  );
}

export default GenderInput;
