

const user =  {
    state: {
        token:'' 
    },
    mutations: {
        // 设置 token
        Set_Token:(state,token) =>{
            state.token = token
        }
    },
    actions: {
        Login: ({commit}, data) =>{
            return new Promise((resolve, reject) =>{
                
            })
        }
    }
}

export default user