import { Contact } from "./contact.model"

export interface Requestor {
    requestor_id:number,
    first_name?:string,
    last_name?:string,
    email?:string
    username?:string,
    contacts:Contact[]
}
