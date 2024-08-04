import { Button, Link } from "@nextui-org/react";
import React from "react";

function LoginLink() {
  return (
    <div className="flex flex-col items-center justify-center">
      <span>¿Ya tienes una cuenta?</span>
      <Link color="success" href="/login">
        Clic aquí
      </Link>
    </div>
  );
}

export default LoginLink;
