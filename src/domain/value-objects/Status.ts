type StatusType='PENDING'|'PAIDOUT'|'EXPIRED'

export class CipStatus{
    history:Object[]
    status:StatusType
    constructor(status:StatusType){
        this.status=status
        this.history=[{status:status,createdAt:new Date().toISOString()}]
    }
}
export class PendingStatus extends CipStatus{
    constructor(){
        super('PENDING')
    }
}
