import * as yup from "yup";

const schemaParticipateInscription = yup.object().shape({
  name: yup
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome pode ter no máximo 50 caracteres")
    .required("Nome é obrigatório"),

  email: yup.string().email("Email inválido").required("Email é obrigatório"),

  areaOfActivity: yup.string().required("Área de atuação é obrigatória"),

  seniority: yup.string().required("Senioridade é obrigatória"),

  experience: yup.boolean(),

  description: yup
    .string()
    .max(256, "Texto muito longo, máximo de 500 caracteres")
    .required("A apresentação é obrigatória"),
});

export default schemaParticipateInscription;
