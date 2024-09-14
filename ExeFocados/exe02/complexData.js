const product = {
    name: 'Laptop',
    price: 1500,
    specifications: {
        brand: 'BrandX',
        weight: '1.5kg',
        dimensions: {
            width: '30cm',
            height: '20cm',
            depth: '2cm'
        }
    }
};


const {name, price, specifications: { brand }} = product;
console.log(name, price, brand);


const {
    specifications: {
        weight,
        dimensions: { width, height, depth }
    }
} = product;

console.log(weight, wi);