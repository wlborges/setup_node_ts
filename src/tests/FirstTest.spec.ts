import { User } from '../models/User'

test('It should be ok', () => {
  const user = new User()

  user.name = 'Marciel'

  expect(user.name).toEqual('Marciel')
})
