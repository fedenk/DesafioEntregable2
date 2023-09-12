const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager('./files/Products.json');

const env = async () => {
    const products = await manager.getProducts();
    console.log(products);

    const product = {
        title:'Pinza',
        description:'BlackJack',
        price:3500,
        thumbnail:'SinImagen',
        code:'abc127',
        stock:20
    };

    await manager.addProducts(product);

    const allProducts = await manager.getProducts();
    console.log(allProducts);

    const id = 3;
    const productById = await manager.getProductById(id);
    console.log(productById);

    const deleteProductId = 2;
    await manager.deleteProduct(deleteProductId);
    const newProducts = await manager.getProducts();
    console.log(newProducts);

    const iD = 1;
    const price = 1500;
    await manager.updateProduct(iD,price);
    const upProdu = await manager.getProducts();
    console.log(upProdu);
}

env();