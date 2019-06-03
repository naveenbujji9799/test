export class Address {
    fullName: string;
    phoneNumber: number;
    pincode: number;
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    city: string;
    state: string;
    country: string;
    addressType: string;

    constructor (address) {
        if (address) {
            this.fullName = address.fullName;
            this.phoneNumber = address.phoneNumber;
            this.pincode = address.pincode;
            this.addressLine1 = address.addressLine1;
            this.addressLine2 = address.addressLine2;
            this.landmark = address.landmark;
            this.city = address.city;
            this.state = address.state;
            this.country = address.country;
            this.addressType = address.addressType;
        }
    }
}
