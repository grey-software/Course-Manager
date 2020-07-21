export default class Course {
    CourseCode = "";
    CourseName = "";
    CourseProgress = "0/0%";
    LectureTimes = [];

    constructor(code, name)
    {
        this.CourseCode = code;
        this.CourseName = name;
    }
}