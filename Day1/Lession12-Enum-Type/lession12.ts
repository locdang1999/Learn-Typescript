enum API_STATUS {
    PEDDING,
    FULFILLED,
    REJECTED
}

let check = API_STATUS.PEDDING;
console.log(check);
//Nếu ko gán biến cho các phần tử trong enum thì mặc định các phần tử trong enum sẽ lấy vị trí index của nó 
//Nên dùng cách 2 gán giá trị cụ thể trên FE, BE tùy case

enum LocalStorage {
    USER_INFO = "user-info"
}
enum Cookie {
    USER_ID = "user-id"
}
console.log(LocalStorage.USER_INFO);

//Khi ta tạo 1 function truyền vào là 1 enum thì khi call function đó bắt buộc ta phải truyền vào enum đã truyền
function doSomething(test: LocalStorage) {
    console.log(test);
}

// doSomething("user-info"); // error is not Localstorage
// doSomething(Cookie.USER_ID); // error is not Localstorage
doSomething(LocalStorage.USER_INFO);

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 4,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}
console.log(FileAccess.Write);

//Trong Typescript hiện đại bạn chỉ cần as const vào object là đủ
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

console.log(ODirection.Down);
