import { Input } from "@nextui-org/react";
import React from "react";
import { FaCalendarDay } from "react-icons/fa6";

type HandleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

interface AgeInputProps {
  error: string;
  handleChange: HandleChange;
  age: number;
}

function AgeInput(props: AgeInputProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaCalendarDay
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Input
          validationBehavior="native"
          required
          type="number"
          name="age"
          min={10}
          className="w-64 md:w-96"
          max={50}
          step={1}
          label="Edad"
          placeholder="Ingrese su edad"
          value={String(props.age)}
          onChange={props.handleChange}
          variant="bordered"
        />
      </div>
      {props.error && <p className="text-red-500 text-center">{props.error}</p>}
    </div>
  );
}

export default AgeInput;
