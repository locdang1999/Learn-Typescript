console.clear();

//closures
function test(): Function {
    return function () {
        console.log("first")
    }
}

test()(); //Muốn trả ra kết quả thì phải gọi thêm 1 lần nữa

function test1(): Function {
    return function (a: number, b: number) {
        return a + b
    }
}
console.log(test1()(1, 2));

/** DECORATORS */
// bắt buộc phải đi kèm với 1 cái class và bản chất là 1 function
// Có 5 loại Decorators: Class, Method, Accessor, Property, Parameter

// --Phần 1: Method Decorators
//c1: closure in decorators
// function logger() { 
//     //descriptor: thông tin của method, property... nơi mình đặt vào
//     return (target: any, propertyName: string, descriptor: PropertyDescriptor) =>{
//         console.log(propertyName);
//         console.log(descriptor);
//     }

// }

//c2 thường
function logger(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    //descriptor: thông tin của method, property... nơi mình đặt vào
    // console.log(propertyName);
    console.log(descriptor);
}



class TestController {

    // @logger() //c1
    @logger //c2
    hello() {
        console.log("first")
    }

    // @logger
    // run() {

    // }
}

const testDecrt = new TestController();

//Phần 2 Method Decorators
console.clear();

function loggers(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    // console.log(target); // Lấy ra được Instance 
    // console.log(propertyName); // Lấy ra được name của method đã gán Decorators
    // console.log(descriptor.value); // Lấy ra được properties và có thể thay đổi được, properties... Nơi mà nó đặt vào

    // descriptor.value = function () {
    //     console.log("test");
    // }

    const method = descriptor.value;
    descriptor.value = (...args: any[]) => {
        console.log(...args);
        // return method(...args);
        return 2 * method(...args);
    }

}

class TestControllers {

    // @logger
    // hello() {
    //     console.log("first")
    // }

    @loggers
    add(a: number, b: number) {
        return a + b;
    }
}

const testDe = new TestControllers();
// testDe.hello();
testDe.add(1, 2);
console.log(testDe.add(1, 2));

//Phần 3 Method Decorators 
console.clear();

function multiply(x: number) {
    return function xn(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        descriptor.value = (...args: any[]) => {
            return x * method(...args);
        }
    }
}

class TestControllerr {

    @multiply(2)
    add(a: number, b: number) {
        return a + b;
    }
}

const testDes = new TestControllerr();
console.log(testDes.add(1, 2));

// Phần 4: Class Decorators
function Controller(prefix: string) {
    return function (contructor: any) {
        // console.log(contructor);
        return class extends contructor {
            prefix: string = prefix;

        }
    }
}


@Controller('users')
class ClassController {
    age: number = 10;
}

const testClass = new ClassController();
console.log(testClass.prefix);