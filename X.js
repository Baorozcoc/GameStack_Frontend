register(username,password,email){
    return axios.post(
        ENDPOINT_PATH,{
        query: `mutation Mutation($inputUser: userInput) {
            createUser(inputUser: $inputUser){
                username
                password
                email
                role
                gamePreferences
                _id
            }
        }`,
        variables:{
            inputUser:{
                username: username,
                password: password,
                email: email,
                role: "User",
                gamePreferences: [],
            },
        }
    },{
        headers: {
            'Content-Type': 'application/json'
        }
    });
},
existance(email,password){
    //NO MODIFICAR, SOLO SE USA PARA VALIDAR EL LOGIN EN LA BD
    return axios.post(ENDPOINT_PATH,{
        query: `query Query($email: String!, $password: Int!){
            getExists(email: $email, password: $password)
          }`,
          variables: {
              email: email,
              password: password,
          }
        },{
            headers:{
                'Content-Type': 'application/json'
            }
         
    })
}
