import { Admission } from "./Admission";
import { Course } from "./Course";
 
export interface Payment{
    paymentId: number,
    status:string ,
    amount: number,
    paymentDate:Date,
    mode:string ,
    userId: number,
    admissionId: number,
    courseId: number,
    createdBy?: string,
    createdAt?:Date,
    course:Course,
    admission:Admission
}