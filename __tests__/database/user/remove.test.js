import { removeUser } from 'database/user/remove'
import * as file from 'database/file';

jest.mock('../../../src/database/file.js');
jest.mock('../../../src/database/path.js', () => null)

const	mockUser	=	{
  uid:	'abc-1234',
  name:	'nome',
  lastName:	'DeUsuario',  
};

afterEach(() => {
  jest.clearAllMocks()
})
beforeEach(() => {
  file.loadDatabase.mockResolvedValueOnce([mockUser]);

})
it('should removed user', async () => {
  // Learn - mockResolvedValueOnce
  expect(file.loadDatabase).not.toHaveBeenCalled();
  expect(file.saveDatabase).not.toHaveBeenCalled();

  const removeUserDatabase = await removeUser('abc-1234');

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([]);

  expect(removeUserDatabase).toEqual(mockUser)
});

it('should error when user not exist in database', async () => {
  expect(file.loadDatabase).not.toHaveBeenCalled();
  expect(file.saveDatabase).not.toHaveBeenCalled();

  try {
  await removeUser('abc-11111');
    
  } catch (error) {
    expect(file.loadDatabase).toHaveBeenCalledTimes(1);
    expect(file.saveDatabase).not.toHaveBeenCalled();
  }
});