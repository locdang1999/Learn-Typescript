// TS inference: mặc định có thể đoán được kiểu dữ liệu khi chúng ta gán dữ liệu
// Type annotaions: chúng ta sẽ định nghĩa "ép buốc chính xác" kiểu dữ liệu cho biến
// Vậy sử dụng 2 loại này khi nào?????
// - TS inference: khi bản thân muốn
// VD:

let listTest1 = ['Java', 'TS', 'JS', 10]; //Mảng chỉ chứa String
listTest1.push(25);
console.log(listTest1, typeof listTest1);

// - Type annotaions: + Khai báo 1 biến và gán giá trị cho nó ngay sau đó.
//                    + Khai báo 1 biến => ép kiểu (Không muốn được tự động gán)
//                    + Muốn ép kiểu trả về giá trị mong muốn
// VD:

let listTest: string[] = ['Java', 'TS', 'JS']; //Mảng chỉ chứa String
// listName.push(25);//Error
listTest.push("C");
console.log(listTest, typeof listTest);