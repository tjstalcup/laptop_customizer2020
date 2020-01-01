import React from "react";

import CartItem from '../CartItem/CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function Cart(props) {

    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
  
        return <CartItem featureHash={featureHash} feature={feature} selectedOption={selectedOption} />
      });
  
      const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

  return (
    <>
        {summary}
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
            </div>
        </div>
    </>
  );
}
