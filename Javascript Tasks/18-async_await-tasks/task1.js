function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Product " + id);
    }, 2000);
  });
}

async function loadProducts() {
  let product1 = await getProduct(1);
  console.log(product1);

  let product2 = await getProduct(2);
  console.log(product2);

  let product3 = await getProduct(3);
  console.log(product3);
}

loadProducts();