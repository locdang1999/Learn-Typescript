var company = {
    address: 'tokyo'
};
var user = {
    name: 'Johnny',
    age: 15
};
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var testC = deepClone(company);
var testU = deepClone(user);
console.log("-----Bài toán để bắt đầu với 'Generics'-----");
console.log(testC, testU);
// Sau khi sử dụng Generics
function deepCloneGenerics(obj) {
    return JSON.parse(JSON.stringify(obj));
}
console.log("-----Bắt đầu với 'Generics'-----");
var testCG = deepCloneGenerics(company);
var testUG = deepCloneGenerics(user);
console.log(testCG, testUG, deepCloneGenerics(0)); //nhưng lúc này T chưa được quy định kiểu dữ liệu cụ thể nên truyền vào bất cứ giá trị nào vào deepCloneGenerics điều được
function deepCloneGenericsWithType(obj) {
    return JSON.parse(JSON.stringify(obj));
}
console.log("-----Rằng buộc 'Type' trong 'Generics' với từ khóa 'extends'-----");
var testCGT = deepCloneGenericsWithType(company);
var testUGT = deepCloneGenericsWithType(user);
// const testType = deepCloneGenericsWithType(0); // đối số loại number ko thể gán cho tham số loại đối tượng
console.log(testCGT, testUGT);
var studentG = {
    name: 'Jimmy',
    age: 15,
    class: '10A1'
};
var testSGT = deepCloneGenericsWithType(studentG);
console.log("-----Rằng buộc trong 'Generics' với từ khóa 'extends'-----");
console.log(testSGT);
function testCheck(arg) {
    console.log("-----Function check type với kiểu type mới 'never'-----");
    console.log(arg);
}
// testCheck(company); // Đối số của 'Company' không thể gán cho tham số của loại 'never'
testCheck(studentG);
//Union type trong generics
var arrays = [];
function store(item) {
    arrays.push(item);
}
var Arr = /** @class */ (function () {
    function Arr() {
    }
    Arr.prototype.forEach = function (callback) {
    };
    ;
    Arr.prototype.map = function (callback) {
    };
    return Arr;
}());
var testArr = [1, 2, 3, 4];
console.log(testArr);
testArr.forEach(function (itm, i) { return console.log(itm, i); });
var a = {
    red: 1,
    blue: 2,
    green: 3
};
var aFake = {
    red: 4,
    blue: 5,
    green: 6
};
var companyTp = {
    address: "Tp.HCM"
};
console.log(companyTp);
var testABC = {
    tr: '1'
};
var jack = {
    name: 'Jack',
    age: 19
};
var jmm;
(function (jmm) {
    jmm["name"] = "jmm";
    jmm[jmm["age"] = 19] = "age";
})(jmm || (jmm = {}));
var red = {
    red: 1,
    blue: 2,
    green: 3
};
var fruit = {
    apple: 1,
    banana: 3
};
var testStrTpGRB = 'blue-100';
//Bài tập Generics and Type
var techF = {
    name: 'TS',
    age: 10,
    company: {
        address: 'HCM'
    }
};
function testTechF(obj, key) {
    return obj[key];
}
;
var testVal = testTechF(techF, 'company');
// Omit trong Utility Types
function removeKey(obj, key) {
    delete obj[key];
    return obj;
}
var testDeleteKey = removeKey(techF, 'company');
console.log(testDeleteKey);
function removeArrKey(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    keys.forEach(function (key) { return delete obj[key]; });
    return obj;
}
var testDeleteArrKey = removeArrKey(techF, 'company', 'age');
console.log(testDeleteArrKey);
var promise = new Promise(function (resolve) {
    resolve({
        type: 'User',
        userId: 1
    });
});
console.log(promise);
