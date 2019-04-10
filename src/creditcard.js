import React, { Component } from 'react';
import puce from './puce.jpg';
import mastercard from './mastercard.jpeg';

class CreditCard extends Component {
    render() {
      return (
        <div className="creditcard">
  
              <div className='credit-card_title'> CREDIT CARD</div>
              <div className='credit-card_image'>
                <img className='puce'src={puce} alt="puce" />
              </div>
              <div className='credit-card_number'> 7253 3256 7895 1245</div>
              <div className='credit-card_info'>
                <div className='credit-card_name'>
                  <div className='credit-card_info_code'>5422</div>
                  <div className='credit-card_info_user'>CARDHOLDER</div>
                </div>
                <div className='credit-card_info_expiry'>
                  <div className='credit-card_info_text'>VALID <br/> UP TO</div>
                  <div className='credit-card_info_valid'>
                      <div className='credit-card_info_label'>MONTH / YEAR</div>
                      <div className='credit-card_info_date'>11/50</div>
                  </div>
                </div>
                <div className='credit-card_logo'>
                <img src={mastercard} alt="mastercard" />
                </div>
              </div>
              
        </div>
      );
    }
  }
  export default CreditCard;
  