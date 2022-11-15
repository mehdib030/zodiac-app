import { Contact } from "./contact.model";
import { FamousPerson } from "./famous-person.model";

export interface Request {
    request_id?:string,
    uuid?:string,
    status?:string,
    requestor_requestor_id:number,
    contacts?: Contact[],
    persons?: FamousPerson[]
    
}
