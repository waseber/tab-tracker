import api from '@/services/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  }
}

// AuthenticationService.register({
//  email: 'ygerber@newsbank.com',
//  password: '123456'
// })
