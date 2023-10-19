/** TYPE ALIAS */
type StringOrNum = string | number;
type Student = {
    name: string;
    id: StringOrNum
}

const studentDetails = (id: StringOrNum, studentNm: string): void => {
    console.log(`Student ${studentNm} has id: ${id}`)
};
studentDetails(123, "Loc");
studentDetails("123", "Loc");

const greet = (user: Student) => console.log(`${user.name} with id ${user.id} says hello!!!`);
greet({
    name: "Loc",
    id: 123
});