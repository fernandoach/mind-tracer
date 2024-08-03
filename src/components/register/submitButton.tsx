import { Button } from "@nextui-org/react";
import React from "react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

function SubmitButton(props: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant="bordered"
      className="hover:bg-slate-700"
      color="success"
      isDisabled={props.isSubmitting}
    >
      Registrarse
    </Button>
  );
}

export default SubmitButton;
