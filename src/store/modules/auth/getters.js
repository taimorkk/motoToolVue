export default {
    userId(state) {
      return state.userId;
    },

    roleId(state) {
      
        return state.roleId;
      },

      token(state) {
        return state.token;
      },

      data(state){
        return state.data;
      },

      isAuthenticated(state) {
        console.log(state.roleId);
        console.log(state.token);
        return !!state.token;
      },
      isUser(state){
      
          if(state.roleId==2){
              return true;
          }
      },

      isAdmin(state){
      
        if(state.roleId==1){
            return true;
        }
    },

      didAutoLogout(state){
        return state.didAutoLogout;
      }
  };