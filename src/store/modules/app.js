const app = {
    namespaced: true, //命名空间
    state: {
        isLogin:false
    },
    mutations: {
        // 改变登录的状态
        Set_Login_Status: state =>{
            state.isLogin = !state.isLogin
        }
    },
    actions: {
        toggle_login_status: ({commit}) =>{
            commit('Set_Login_Status')
        }
    }
}
export default app 