import parse, { validateArgs } from "../../src/utils/args";

it("Faz o parse dos argumentos da CLI", () => {
  const argumentos = [
    "/Users/felipe.costa/.nvm/versions/node/v14.11.0/bin/node",
    "/Users/felipe.costa/.nvm/versions/node/v14.11.0/bin/jsassertivo",
    "--username=admin",
    "--password=admin",
    "--operation=operacao",
    '--data={"uid":	"abc-123"}',
  ];

  const dados = {
    username: "admin",
    password: "admin",
    operation: "operacao",
    data: {
      uid: "abc-123",
    },
  };

  const retornado = parse(argumentos);

  expect(retornado).toEqual(dados)
});
