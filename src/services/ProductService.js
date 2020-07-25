export default class ProductService {
  static getProductsByFilter(
    products,
    { category, featured, name, manufacture }
  ) {
    let result = products;

    if (name && name.length) {
      const text = name.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(text)
      );
    }

    if (manufacture) {
      result = result.filter((product) => product.manufacture === manufacture);
    }

    if (category) {
      result = result.filter((product) => product.category === category);
    }

    if (featured) {
      result = result.filter((product) => product.featured);
    }

    return result;
  }

  static getManufacturers(products) {
    return ['All', ...new Set(products.map((product) => product.manufacture))];
  }
}
