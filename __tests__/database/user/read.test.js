import { getUserByUid } from "database/user/read";
import { loadDatabase } from "database/file";
import { MESSAGES } from "database/user/read";

jest.mock("../../../src/database/path.js");
jest.mock("../../../src/database/file.js");


const mockUser = {
  email: "Gwendolyn.Hilll@yahoo.com",
  userName: "Monserrat_DAmore36",
  password: "70NFG0MrpVPhSa1",
  name: "Myron",
  lastName: "Gulgowski",
  uid: "1350f2e8-45a9-4ed1-9333-eb95dc071fdb",
  avatar: "https://cdn.fakercloud.com/avatars/okandungel_128.jpg",
  role: "USER",
};

loadDatabase.mockResolvedValue([mockUser]);

it('should find a user when find your UID', async () => {
  expect.assertions(1);
  const user = await getUserByUid('1350f2e8-45a9-4ed1-9333-eb95dc071fdb');
  expect(user).toEqual(mockUser)  
});

it('should throws an error if the user is not found', async () => {
  expect.assertions(1);

  try {
    await getUserByUid('uui-not-exist')
  } catch (error) {
    expect(error.message).toEqual(MESSAGES.uidIcorrect)
  }
});
