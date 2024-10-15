import * as Yup from "yup"

export const SchemaComments = Yup.object().shape({
  nome: Yup.string()
    .required('Nome é obrigatório'),
  
  githubuser: Yup.string()
    .required('Usuário do GitHub é obrigatório'),
  
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  
  comentario: Yup.string()
    .required('Comentário é obrigatório')
}) 