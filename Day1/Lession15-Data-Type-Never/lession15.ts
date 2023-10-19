//Giống void dùng cho 1 func nhưng void sẽ trả ra undefined
function handleException(errMsg: string): never {
    throw Error(errMsg);
}

function runInfinity() {
    // while (true) {
    //     console.log("running");
    // }
}

function runInfinityN(config: number): never {
    console.log("running", config);
    while (true) {
        console.log("running");
    }
    //Never chỉ dùng khi nào hàm không thể trả về bất kỳ kiểu dữ liệu nào
    //Ví dụ tgroing trường hợp này while sẽ chạy vô hạn và hàm sẽ ko return ra bất kì 1 giá trị type nào
}

// handleException("just a test error");
const check = runInfinity();
console.log("Check func return void >> ", check);
const check2 = runInfinityN(2);
console.log("Check func return never >> ", check2);