
import axios from 'axios'


let timer;

export default{
   async login( context, payload){
  return context.dispatch('auth',{
     ...payload,
   })
        
      }, 
      
  
  async auth(context ,payload){

   
      const response = await axios.post('http://droidom110-001-site1.ftempurl.com/api/Users/Login', {
           
             userName: payload.userName,
             password: payload.password
          
         });
    
         const responseData = await response;

        
        const expiresIn = +responseData.data.model.accessTokenExpiry * 1000;
        
        const expirationDate = new Date().getTime() + expiresIn;

          

            localStorage.setItem('token', responseData.data.model.accessToken);
            localStorage.setItem('userId', responseData.data.model.userInfo.id);
            localStorage.setItem('tokenExpiration', expirationDate);

           timer = setTimeout(function(){
              context.dispatch('autoLogout');
            },expiresIn);

           context.commit('setUser', {
           token: responseData.data.model.accessToken,
           userId: responseData.data.model.userInfo.id,
           roleId: responseData.data.model.userInfo.roleId,
           
         });
   
           
      
   },
   
   autoLogin(context){

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

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
        userId:userId
        
      });
    }
   },

   logout(context){

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');


clearTimeout(timer);
   
       context.commit('setUser',{

           token:null,
           userId:null
        });
   },

   autoLogout(context){
     context.dispatch('logout');
     context.commit('setAutoLogout');
   }

}