let count = 0;

while (count < 5) {
    console.log(count);
    if (count % 2 === 0) {
        break;
    }
    count++;
} // Kiểm tra dk trước khi chạy

// do-while
console.log("do-while");

let countDW = 0;
do { //Auto chạy tối thiểu 1 lần do dù ko đúng đk, vì nó sẽ ko kiểm tra dk ngay.
    console.log(countDW);
    if (countDW % 2 === 0) {
        break;
    }
    countDW++;
} while (countDW);