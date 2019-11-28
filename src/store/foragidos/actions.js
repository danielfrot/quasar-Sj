import { HTTPApi } from '../../boot/axios'

const setForagido = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPApi.get('api/foragidos').then((suc) => {
      resolve(suc.data)
      commit('SET_FORAGIDO', suc.data)
      // console.log(suc.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export { setForagido }
