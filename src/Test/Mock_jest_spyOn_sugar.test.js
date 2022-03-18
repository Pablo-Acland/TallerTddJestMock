import * as app from "../JS/App";
import * as math from "../JS/math";

test("calls math.add", () => {

  // A la constante originalAdd le asigna la funcion add de math (math.add)
  const originalAdd = math.add;

  // mock add con la implementacion de la funcion original
  math.add = jest.fn(originalAdd);

  // Espera que los parametros de (1,2) de el doAdd si el resulatdo es igual a 3
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  /* Suscribe todas las implementaciones haciendo una reasignacion 
  de la funciones anteriores a la funcion Mock (se llamara a mock en vez de a la funcion Original)*/
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);

  /* Con esto lo que podemos hacer es restaurar la implementacion original de la funcion asignada*/
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});