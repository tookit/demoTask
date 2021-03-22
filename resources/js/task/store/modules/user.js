import request from '@/util/request'

const state = {}

// getters
const getters = {}

// actions
const actions = {
  fetchUser(context, query) {
    return request({
      url: `/user/`,
      method: 'get',
      params: query
    })
  },
  createUser(context, data) {
    return request({
      url: `/user/`,
      method: 'post',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  updateUser(context, { id, data }) {
    return request({
      url: `/user/${id}`,
      method: 'put',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  getUserById(context, id) {
    return request({
      url: `/user/${id}`,
      method: 'get'
    }).then((resp) => {
      return resp
    })
  }
}

// mutations
const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
