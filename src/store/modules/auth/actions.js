
import axios from 'axios'

//var baseServerUrl = sessionStorage.getItem("base_server_url");

let timer;

export default{


   async login( context, payload){
     
  return context.dispatch('auth',{
     ...payload 
   },
   )}, 
        
  
  async auth(context ,payload){

   
      const response = await axios({
        method:payload.reqType,
        url:"http://droidom110-001-site1.ftempurl.com/api/"+payload.url, 
           
        data:payload.userData
          
  });
    
         const responseData = await response;
    
         
         console.log(responseData)
        
        const expiresIn = +responseData.data.model.accessTokenExpiry * 1000;
        
        const expirationDate = new Date().getTime() + expiresIn;

          

            sessionStorage.setItem('token', responseData.data.model.accessToken);
            sessionStorage.setItem('userId', responseData.data.model.userInfo.id);
            sessionStorage.setItem('roleId', responseData.data.model.userInfo.roleId);
            sessionStorage.setItem('tokenExpiration', expirationDate);

           timer = setTimeout(function(){
              context.dispatch('autoLogout');
            },expiresIn);

           context.commit('setUser', {
           token: responseData.data.model.accessToken,
           userId: responseData.data.model.userInfo.id,
           roleId: responseData.data.model.userInfo.roleId,
           data: responseData.data
         });
   
           
      
   },
   
   autoLogin(context){

    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const tokenExpiration = sessionStorage.getItem('tokenExpiration');
    const roleID = sessionStorage.getItem('roleId');

    const expiresIn = +tokenExpiration -new Date().getTime();

    if (expiresIn < 0){
      return;
    }

    timer = setTimeout(function(){
      context.dispatch('autoLogout');
    },expiresIn);

    if(token && userId){

      context.commit('setUser',{
        token:token,
        userId:userId,
        roleId:roleID
        
      });
    }
   },

   logout(context){

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('roleId');
    sessionStorage.removeItem('tokenExpiration');


clearTimeout(timer);
   
       context.commit('setUser',{

           token:null,
           userId:null,
           roleId:null
        });
   },

   autoLogout(context){
     context.dispatch('logout');
     context.commit('setAutoLogout');
   }

}