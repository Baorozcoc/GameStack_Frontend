//module.exports = {
//    gateway :"http://localhost:4000/",
//
//    createUser:`mutation createUser($inputUser: userInput){
//            Username
//            password
//            Email
//            Role
//            GamePreferences
//            _id
//            }
//        }`
//        ,variables:{
//            inputUser: {
//                "Email":"vuetest@gmail.com",
//                "Username":"Vue",
//                "password":12345,
//                "Role":"user",
//                "GamePreferences":[]
//            }
//        }
//        }
//
//    },
//

//axios
//.post(config.apiendpoint, {
//  query: `
//    mutation addSkill($id:String!, $name:String!, $level:Float!, $type:String!) {
//      addSkill(id:$id, name:$name, level:$level, type:$type) {
//        status
//        id
//        name
//        level
//        type
//      }
//    }
//  `,
//  variables: {
//    id: String(id),
//    name: this.form.name,
//    level: parseFloat(this.form.level),
//    type: this.form.type,
//  },
//})
//.then(res => console.log(res))
//.catch(err => console.log(err))
