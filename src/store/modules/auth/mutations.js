export default {
    setUser(state, payload) {
        console.log(payload.token,
            payload.userId,
            payload.roleId)
      state.token = payload.token;
      state.userId = payload.userId;
      state.roleId = payload.roleId;
      state.tokenExpiration = payload.tokenExpiration;
    }
  };