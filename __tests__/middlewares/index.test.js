import applyMiddlewares from "middlewares/index.js";

it('should reuturn a new function call others middlewares when executed', () => {
  const mid1 = jest.fn(data => data);
  const mid2 = jest.fn(data => data);

  const middlewaresAplicados = applyMiddlewares(mid1, mid2)

  expect(middlewaresAplicados).toEqual(expect.any(Function))
  expect(mid1).not.toHaveBeenCalled();
  expect(mid2).not.toHaveBeenCalled();

  const args = 'dados';
  middlewaresAplicados(args)

  expect(mid1).toHaveBeenCalledTimes(1);
  expect(mid1).toHaveBeenCalledWith(args);
  expect(mid2).toHaveBeenCalledTimes(1);
  expect(mid2).toHaveBeenCalledWith(args)
});