import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface schemasOptions {
  schema: any;
}

export function useValidation(schemas: schemasOptions) {

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.schema),
  });

 

  return { register, watch, handleSubmit, errors, setValue };
}
