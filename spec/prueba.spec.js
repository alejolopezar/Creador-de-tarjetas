// Importar clases Activity y Repository
const { Activity, Repository} = require("../scripts/modulo");

// Realizar los tests
describe("Las clases Activity y Repository", () => {
  const prueba = new Repository();
  const prueba2 = new Activity();
// Deben ser clases
  it("Deben ser clases", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
    expect(typeof Repository.prototype.constructor).toBe("function");
  })
// Debe ser una instancia de la clase Repository
it("Debe ser una instancia de la clase Repository", () => {
  expect(prueba instanceof Repository).toBe(true);
});
// Debe ser una instancia de la clase Activity
it("Debe ser una instancia de la clase Activity", () => {
  expect(prueba2 instanceof Activity).toBe(true);
});
// Debe tener los metodos:
//    - getAllActivities(): debe retornar la lista de actividades
it("Debe tener implementado el metodo getAllActivities()", () => {
  expect(typeof prueba.getAllActivities).toBe("function");
});
//    - createActivity(): deberia pushear al array una actividad nueva
it("Debe tener implementado el metodo createActivity()", () => {
  expect(typeof prueba.createActivity).toBe("function");
});
//    - deleteActivity(): deberia eliminar una tarjeta
it("Debe tener implementado el metodo deleteActivity()", () => {
  expect(typeof prueba.deleteActivity).toBe("function");
});
// Debe retornar una lista
it("El metodo getAllActivities debe retornar un array", () => {
  expect(Array.isArray(prueba.getAllActivities())).toBeTrue();
});
// Debe agregar un elemento
it("El metodo createActivity() debe agregar un nuevo elemento", () => {
prueba.createActivity("texto","prueba","https://i.ytimg.com/vi/mWixowa4_Dg/maxresdefault.jpg");
  expect(prueba.getAllActivities()[0].title).toBe("texto");
});
// Debe eliminar una actividad
it("El metodo deleteActivity() debe eliminar una actividad", () => {
  prueba.deleteActivity(0);
  expect(prueba.getAllActivities().length).toBe(0);

  it("hola",function(){
    expect(2+3).toBe(5);
  });
});
});