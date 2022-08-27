import React from 'react';
import '../styles/Quote.css';

function Quote() {
  return (
    <div className='wrapper-quote'>
        <div className='quote-header'>
            <h1>Quote</h1>
        </div>
        <div className='quote-body'>
            <form className='quote-form'>
                <div className='slantdiv'><input type="text" class="form-control" id="name" placeholder="Your name" name="name" /></div>
                <div className='slantdiv'><input type="text" class="form-control" id="phone" placeholder="Your phone number" name="phone-number" /></div>
                <div className='slantdiv'><input type="text" class="form-control" id="prdtyp" placeholder="Product type" name="product-type" /></div>
                <button type="button" class="quote-btn">Get Quote</button>
            </form>
        </div>
    </div>
  )
}

export default Quote