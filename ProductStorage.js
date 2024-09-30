class ProductStorage {
  constructor(jsondata) {
    if (!jsondata) {
      throw new Error("data storage missing");
    }
    this.products = jsondata;
  }

  has_info(searchKey) {
    if (!searchKey) return false;
    const product = this.products.find((item) => item.id === searchKey);
    return product && product.info && Object.keys(product.info).length > 0;
  }

  get_info(searchKey) {
    if (!searchKey) return null;
    const product = this.products.find((item) => item.id === searchKey);
    return product ? product.info : null;
  }

  get_All_products_By_type(searchValue) {
    if (!searchValue) {
      throw new Error("missing parameter");
    }
    return this.products.filter((item) => item.type === searchValue);
  }

  get_Price(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new Error("nothing found with given searchValue");
    }
    return product.price;
  }

  get_product_colors(searchKey) {
    const product = this.products.find((item) => item.id === searchKey);
    return product && product.colors ? product.colors : [];
  }
}

module.exports = ProductStorage;
