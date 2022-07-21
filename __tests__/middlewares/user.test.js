import {isAdminMiddleware} from "middlewares/user";
import {ROLES} from 'constants/roles';

const	mockUsuario	=	{
  uid:	'abc-1234',
  userName:	'nomeDeUsuario',
  name:	'nome',
  lastName:	'DeUsuario',
  email:	'email.nome@usuario.com',
  password:	'senhasupersecreta',
};

it('should return user data if the role is ADMIN', () => {
  const mockAdmin = {
    user: {
      ...mockUsuario,
      role: ROLES.ADMIN
    }
  }
  const returnFunc = isAdminMiddleware(mockAdmin);
  expect(returnFunc).toEqual(mockAdmin)
});

it('should trigger an error if the user not is ADMIN', () => {
  const mockUser = {
    user: {
      ...mockUsuario,
      role: ROLES.USER
    }
  }
  // Learn
  const returnFunc = () => isAdminMiddleware(mockUser);
  expect(returnFunc).toThrow('Você não possui permissão para executar essa operação.')
});