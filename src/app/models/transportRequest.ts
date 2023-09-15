export interface TransportRequest{
    transportRequestId:number;
    userId:number;
    requestTypeId:number;
    sourceAddress:string;
    destinationAddress:string;
    requestDate:Date;
    status:string;
}