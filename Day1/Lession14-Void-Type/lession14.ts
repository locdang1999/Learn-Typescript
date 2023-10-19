const sum = (a: number, b: number): number => {
    return a + b;
}; //Function này sẽ trả về giá trị là number

const handleLogs = (message: string) => {
    console.log("message: ", message);
} //mặc định hàm ko có tham số trả về sẽ có key void

console.log(sum(1,2));
handleLogs("sussess");