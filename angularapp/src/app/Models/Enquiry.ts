import { Course } from "./Course";
 
export interface Enquiry {
    createdBy: string,
    userId: number,
    createdAt:Date ,
    enquiryType: string,
    modifiedBy: null,
    description: string,
    modifiedAt: Date,
    title:string,
    isDeleted: Boolean,
    enquiryDate: Date,
    //user:User,
    enquiryID: number,
    course:Course
    courseName:string
}