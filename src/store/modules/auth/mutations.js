export default {
    setUser(state, payload) {
        
      state.token = payload.token;
      state.userId = payload.userId;
      state.roleId = payload.roleId;
      state.data = payload.data;
      state.didAutoLogout = false;
    
    },

    setAutoLogout(state){
      state.didAutoLogout = true;
    }


  };