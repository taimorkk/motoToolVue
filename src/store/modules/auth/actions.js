
import axios from 'axios'
export default{
   async login( context, payload){
   const response = await axios.post('http://droidom110-001-site1.ftempurl.com/api/Users/Login', {
        
          userName: payload.userName,
          password: payload.password
       
      });

      const responseData = await response;
      
        if(!responseData.data.isError){
         
   console.log(responseData);
   console.log(responseData.data.model.accessToken,response.data.model.userInfo.id,response.data.model.accessTokenExpiry)
      context.commit('setUser', {
        token: responseData.data.model.accessToken,
        userId: responseData.data.model.userInfo.id,
        roleId: responseData.data.model.userInfo.roleId,
        tokenExpiration: responseData.data.model.accessTokenExpiry
      });

        }
        
      }, 
      
  
   
   

   logout(context){
       context.commit('setUser',{

           token:null,
           userId:null,
           tokenExpiration:null
        });
   }

}