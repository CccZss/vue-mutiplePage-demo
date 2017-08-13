import types from '../types/user'
import { myAxios } from 'src/utils/interaction'

const state = {
    userName: '',
    email: '',
    phone: '',
    mark: 0,
    userId: undefined,
}

const actions = {
    [types.actions.updateInfo]: (context, user) => {
        //context: commit,dispatch,getters,state
        return new Promise((resolve, reject) => {
        	context.commit(types.mutations.setInfo, user)
        	resolve('success')
        })
    },
    [types.actions.login]: (context, data) => {
        //context: commit,dispatch,getters,state
        return new Promise((resolve, reject) => {
            myAxios({
                method: 'POST',
                url: 'user/login',
                data: data
            }).then(function(res){
                if(res.data.state.toString()==="1"){
                    context.commit(types.mutations.setInfo,res.data.data)
                    resolve({
                        state: true,
                        info: res.data.stateInfo,
                        mark: res.data.data.mark
                    })
                }else{
                    resolve({
                        state: false,
                        info: res.data.stateInfo}
                    )
                }
            }).catch(function(err){
                reject(err)
            })
        })
    },
    [types.actions.register]: (context, data) => {
        //context: commit,dispatch,getters,state
        return new Promise((resolve, reject) => {
            myAxios({
                method: 'POST',
                url: 'user/register',
                data: data
            }).then(function(res){
                if(res.data.state.toString()==="1"){
                    resolve({
                        state: true,
                        info: res.data.stateInfo}
                    )
                }else{
                    resolve({
                        state: false,
                        info: res.data.stateInfo}
                    )
                }
                // context.commit(types.mutations.setInfo,res.data.user)
            }).catch(function(err){
                reject(err)
            })
        })
    },
}

const mutations = {
    [types.mutations.setInfo]: (state, datas) => {
        Object.assign(state,datas)
    },
}

export default {
  state,
  actions,
  mutations
};
