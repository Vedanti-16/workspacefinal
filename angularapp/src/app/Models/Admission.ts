import { Course } from "./Course";
 
export interface Admission {
    admissionId:number,
    courseId:number,
    userId: number,
    status: string,
    isDeleted: boolean,
    course:Course,
    courseName:string
}