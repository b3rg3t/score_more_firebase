import React from "react";
import { useForm } from "react-hook-form";

const FormNewGame = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data: any) => {};

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};

export default FormNewGame;
