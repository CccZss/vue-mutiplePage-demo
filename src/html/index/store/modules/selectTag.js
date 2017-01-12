import * as types from '../types'

const state = {
    tags:[],
}

const getters = {

}

const mutations = {
  [types.ADD_TAG] (state,tag){
    if(state.tags.indexOf(tag)==-1){
        state.tags.push(tag)
    };
  }, 
  [types.DELETE_TAG](state,index){
    state.tags.splice(index,1);
  }
}

const actions = {
  addTag({state,commit,rootState},tag) {
    commit(types.ADD_TAG,tag);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
