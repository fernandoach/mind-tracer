import { Input } from "@nextui-org/react";
import { FaCircleUser } from "react-icons/fa6";

type HandleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;

interface FullNameInputProps {
  error: string;
  handleChange: HandleChange;
  fullName: string;
}

function FullNameInput(props: FullNameInputProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full">
        <FaCircleUser
          className="flex justify-center items-center h-full mx-2"
          size={30}
        />
        <Input
          validationBehavior="native"
          required
          type="text"
          className="w-64 md:w-96"
          name="fullName"
          variant="bordered"
          label="Nombres completos"
          placeholder="Ingrese su nombre completo"
          value={props.fullName}
          onChange={props.handleChange}
        />
      </div>
      {props.error && <p className="text-red-500 text-center">{props.error}</p>}
    </div>
  );
}

export default FullNameInput;
