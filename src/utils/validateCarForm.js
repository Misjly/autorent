export const validateCarForm = (values) => {
    const { pickUpDate, dropOffDate, pickUpTime, dropOffTime } = values;
    const errors = {};
    
    if(!pickUpDate) {
        errors.pickUpDate = 'Required';
    }
    
    if(!dropOffDate) {
        errors.dropOffDate = 'Required';
    } else if(Date.parse(dropOffDate) < Date.parse(pickUpDate)) {
        errors.dropOffDate = 'Drop off date must be later than pick up date'
    }
    
    if(!pickUpTime) {
        errors.pickUpTime = 'Required';
    }
    
    if(!dropOffTime) {
        errors.dropOffTime = 'Required';
    }
    
    return errors;
}