import React from 'react';
import styled from 'styled-components';

import { Spinner } from 'blocks';
import { Title } from './elements';
import { Summary, Products } from './index';

import { color_grey_light } from 'styles/variables';

const Cart = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 2.5rem;
    border-left: 1px solid ${color_grey_light};
`;

const CartSummary = ({
    isValid,
    products,
    quantityByID,
    cartSummary,
    totalPrice,
    deliveryPrice,
    isCartLoading,
    submitCheckout
}) => (
    <Cart>
        {!isCartLoading ? (
            <>
                <div>
                    <Title>Your Order</Title>
                    <Products products={products} quantityByID={quantityByID} />
                </div>
                <Summary
                    deliveryPrice={deliveryPrice}
                    totalPrice={totalPrice}
                    cartSummary={cartSummary}
                    submit={submitCheckout}
                    isValid={isValid}
                />
            </>
        ) : (
            <Spinner />
        )}
    </Cart>
);

export default CartSummary;
