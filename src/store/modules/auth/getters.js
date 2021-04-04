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

      isAuthenticated(state) {
        console.log(state.roleId);
        console.log(state.token);
        return !!state.token;
      },
      isUser(state){
        console.log(state.token)
        console.log(state.userId)
          console.log(state.roleId)
          if(state.roleId==1){
              return true;
          }
      }
  };