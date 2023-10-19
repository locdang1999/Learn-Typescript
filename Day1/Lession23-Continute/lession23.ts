let prod = [
    { name: "phone", price: 700 },
    { name: "ipad", price: 900 },
    { name: "macbook", price: 1200 },
]

for (let i = 0; i < prod.length; i++) {
    if (prod[i].price > 900) continue;
    console.log(prod[i]);
}