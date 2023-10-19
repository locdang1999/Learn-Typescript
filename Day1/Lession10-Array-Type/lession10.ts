let myarr: string[] = ["C", "C++", "java", "javascript", "typescript"]; //chỉ truyền được string
myarr.push("HTML");

// có thể truyền string và number hoặc thêm các kiểu types khác khi sử dụng dấu hoặc (|)
let myarrNew: (string | number)[] = ["C", "C++", "java", "javascript", "typescript"];
myarrNew.push(10);
console.log(myarrNew);