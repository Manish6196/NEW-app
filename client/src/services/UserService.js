import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addUser (params) {
    return Api().post('user/signup', params)
  },
  loginUser (params) {
    return Api().post('user/login', params)
  },
  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },
  getPost (params) {
    return Api().get('post/' + params.id)
  },
  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
