// ctrl+shift+B => build ts -> js
type Product = {
  name: string;
  price: number;
  salePrice: number;
  image: string;
};

let products: Product[] = [
  {
    name: "Túi xách da",
    price: 500,
    salePrice: 350,
    image:
      "https://product.hstatic.net/1000003969/product/hong_txn511_25_20220722120224_3cd5671d138e435a8a612_f21e49eb76004237897051329838bd0e_master.jpeg",
  },
  {
    name: "Áo sơ mi nam",
    price: 700,
    salePrice: 600,
    image:
      "https://catsa.vn/wp-content/uploads/2022/11/167040885563906a978145f.jpeg",
  },
  {
    name: "Đồng hồ đẹp",
    price: 800,
    salePrice: 650,
    image:
      "https://www.casio.watch-vietnam.vn/wp-content/uploads/2019/08/z2907322738904_801d931b7b205b4227d81a982b045a5e.jpg",
  },
  {
    name: "Dép tông lào",
    price: 650,
    salePrice: 600,
    image:
      "https://product.hstatic.net/1000284478/product/0076_4145748_1_1cf87738417c4eef90e122cf17435796_large.jpg",
  },
];

const tableRoot = document.getElementById("root") as HTMLElement;

let html = "";

products.map((val, idx) => {
  html += `<tr key=${idx}>
           <td>${val.name}</td>
           <td>${val.price}</td>
           <td>${val.salePrice}</td>
           <td><img src=${val.image} alt="hinh anh"/></td>
           </tr>`;
});

tableRoot.innerHTML = html;

