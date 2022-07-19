import { createUser } from "../../../src/database/user/create";
import * as file from '../../../src/database/file';
import { ROLES } from '../../../src/constants/roles'
import path from '../../../src/database/path'

jest.mock('../../../src/database/file.js');
jest.mock('../../../src/database/path.js', () => null)

beforeEach(()	=>	{
  file.loadDatabase.mockResolvedValueOnce([]);
});

afterEach(() => {
  jest.clearAllMocks();
})

afterAll(()	=>	{
  jest.restoreAllMocks();
});

const userData = {
  email: 'user@email.com',
  password: 'password123',
  userName: 'AnotherUser',
  name: 'User',
  lastName: 'another'
}

it('should create a user correctly', async () => {
  expect.assertions(4);
  
  const user = await createUser(userData)

  expect(file.loadDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledWith([user])
  expect(user).toEqual({
    ...userData,
    uid: expect.any(String),
    role: ROLES.USER
  })

})

it('should create a user correctly with admin role ', async () => {
  expect.assertions(4);

  const user = await createUser({...userData, role: ROLES.ADMIN})

  expect(file.loadDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledWith([user])
  expect(user).toEqual({
    ...userData,
    uid: expect.any(String),
    role: ROLES.ADMIN
  })
});