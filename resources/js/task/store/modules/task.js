import request from '@/util/request'


const state = {
  projects: []
}

// getters

const getters = {
  getProjectList: (state) => {
    return state.projects.map((item) => {
      return {
        text: item.name,
        value: String(item.id)
      }
    })
  }
}

// actions

const actions = {

  fetchProject(context) {
    return request({
      url: `/project/`,
      method: 'get',
    }).then((resp) => {
      context.commit('SET_PROJECT_LIST', resp.data)
    })
  },
  fetchTask(context, query) {
    return request({
      url: `/task/`,
      method: 'get',
      params: query
    })
  },
  createTask(context, data) {
    return request({
      url: `/task/`,
      method: 'post',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  updateTask(context, { id, data }) {
    return request({
      url: `/task/${id}`,
      method: 'put',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  deleteTask(context, id) {
    return request({
      url: `/task/${id}`,
      method: 'delete',
    })
  },
  swapOrder(context, data) {
    return request({
      url: `/task/swap`,
      method: 'post',
      data: data
    }).then((resp) => {
      return resp
    })
  },
}

// mutations

const mutations = {
  SET_PROJECT_LIST(state, data) {
    state.projects = data
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
