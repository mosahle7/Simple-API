import * as yup from 'yup'

const minlen = {
  name: 2,
  city: 2,
  country: 2,
  email: 2
}

const maxlen = {
  name: 30,
  city: 50,
  country: 20,
  email: 30
}

export const getUserSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
    })
    }
  }
}
export const addUserSchema = {
    schema: {
      body: {
        yupSchema: yup.object().shape({
          name: yup.string().min(minlen.name).max(maxlen.name).required(),
          email: yup.string().min(minlen.email).max(maxlen.email).email().required(),
          city: yup.string().min(minlen.city).max(maxlen.city).required(),
          country: yup.string().min(minlen.country).max(maxlen.country),
      }),
    },
    },
  }

  export const updateUserSchema = {
    
    schema:{
      params:{
        yupSchema: yup.object().shape({
        id: yup.number().required(),
      })
    },
    body: {
      yupSchema: yup.object().shape({
      name: yup.string().min(minlen.name).max(maxlen.name).required(),
      email: yup.string().min(minlen.email).max(maxlen.email).email().required(),
      city: yup.string().min(minlen.city).max(maxlen.city).required(),
      country: yup.string().min(minlen.country).max(maxlen.country),
    }),
  }
  }
  }
  export const removeUserSchema ={
    schema : {
      params:{
        yupSchema: yup.object().shape({
          id: yup.number().required(),
          
        })
      }
    }
  }
// export const updateUser = {
//     schema:{
//       body:{
//         yupSchema:yup.object().shape({
//           name: yup.string(),
//           email: yup.string().email(),
//           city: yup.string(),
//           country: yup.string(),
//         }),
//       },
//     },
// }

