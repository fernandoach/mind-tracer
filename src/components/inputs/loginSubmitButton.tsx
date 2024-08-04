import { Button } from "@nextui-org/react";
import React from "react";

interface LoginSubmitButtonProps {
  isSubmitting: boolean;
}

function LoginSubmitButton(props: LoginSubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant="bordered"
      className="hover:bg-slate-700"
      color="success"
      isDisabled={props.isSubmitting}
    >
      Login
    </Button>
  );
}

export default LoginSubmitButton;
