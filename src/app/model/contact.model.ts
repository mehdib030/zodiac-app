export interface Contact {
    contactId: number,
    firstName:string,
    lastName:string,
    email:string,
    effectiveDate?:string,
    expirationDate?:string,
    requestor_requestor_id:number
}
