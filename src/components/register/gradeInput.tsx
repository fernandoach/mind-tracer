import { Input } from "@nextui-org/react";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

type HandleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

interface GradeInputProps {
  error: string;
  handleChange: HandleChange;
  grade: number;
}

function GradeInput(props: GradeInputProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaGraduationCap
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Input
          validationBehavior="native"
          required
          type="number"
          name="grade"
          min={1}
          max={5}
          step={1}
          label="Grado"
          className="w-64 md:w-96"
          variant="bordered"
          placeholder="Ingrese su grado"
          value={String(props.grade)}
          onChange={props.handleChange}
        />
      </div>
      {props.error && <p className="text-red-500 text-center">{props.error}</p>}
    </div>
  );
}

export default GradeInput;
