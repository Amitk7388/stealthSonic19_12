import React,{ Component } from "react";
import Payments from '../payments/Payments'
import shippingGetData from "../customOrder/checkout/shipping/shippingGetData";
import ShippingGetData from '../customOrder/checkout/shipping/shippingGetData';

export default class Success extends Component {
		constructor(props){
      super(props);
    }
        
    render(){
    return (
       <div className="">

        <ShippingGetData />
         {/* <h1>Your payment Success...</h1> */}
         <Payments />
        </div>
    );
  }
}

