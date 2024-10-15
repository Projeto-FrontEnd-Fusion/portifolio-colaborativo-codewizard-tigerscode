import * as Yup from "yup";

export const SchemaComments = Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório'),

  githubUser: Yup.string()
    .required('Usuário do GitHub é obrigatório'),

  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),

  comment: Yup.string()
    .required('Comentário é obrigatório')
});
