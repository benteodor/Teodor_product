const ProductStorage = require("../ProductStorage");
const data = require("../datastorage.json");

describe("ProductStorage Class", () => {
  let storage;

  beforeEach(() => {
    storage = new ProductStorage(data);
  });

  test("constructor throws error if no data is passed", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });

  test("has_info returns true if product has info", () => {
    expect(storage.has_info(1)).toBe(true);
  });

  test("has_info returns false if product does not exist or has no info", () => {
    expect(storage.has_info(5)).toBe(false);
    expect(storage.has_info(999)).toBe(false);
  });

  test("get_info returns info object if product exists", () => {
    expect(storage.get_info(1)).toEqual({
      consumption: "B",
      model: "VIP",
      comments: "high quality",
    });
  });

  test("get_info returns null if product does not exist", () => {
    expect(storage.get_info(999)).toBeNull();
  });

  test("get_All_products_By_type returns products of given type", () => {
    const phones = storage.get_All_products_By_type("phone");
    expect(phones.length).toBe(2);
    expect(phones[0].type).toBe("phone");
  });

  test("get_All_products_By_type throws error if no type is passed", () => {
    expect(() => storage.get_All_products_By_type()).toThrow(
      "missing parameter"
    );
  });

  test("get_Price returns price of the product", () => {
    expect(storage.get_Price(1)).toBe(10);
  });

  test("get_Price throws error if product is not found", () => {
    expect(() => storage.get_Price(999)).toThrow(
      "nothing found with given searchValue"
    );
  });

  test("get_product_colors returns colors of the product", () => {
    expect(storage.get_product_colors(1)).toEqual(["red", "green", "blue"]);
  });

  test("get_product_colors returns empty array if product or colors not found", () => {
    expect(storage.get_product_colors(999)).toEqual([]);
  });
});
