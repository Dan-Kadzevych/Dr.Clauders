import React from 'react';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { H1, PageHeader } from 'elements';
import { toRgba } from 'utils/utils';
import {
    getCartProducts,
    getQuantityByID,
    getCartSummary,
    getIsCartLoading,
    getIsCartEmpty
} from 'pages/Cart/duck/selectors';
import {
    getIsFormValid,
    getTotalPrice,
    getDeliveryPriceDescription
} from './duck/selectros';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';
import { color_grey_dark_2 } from 'styles/variables';

const Container = styled.div`
    grid-column: center-start/center-end;

    margin-bottom: 8.5rem;
    margin-top: 4rem;
`;

const StyledCheckout = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 5rem;
    padding: 3rem;
    background-color: rgba(${toRgba(color_grey_dark_2)} 0.1);
`;

const Title = styled(H1)`
    font-weight: 300;
`;

const mapStateToProps = state => ({
    isValid: getIsFormValid(state),
    products: getCartProducts(state),
    quantityByID: getQuantityByID(state),
    cartSummary: getCartSummary(state),
    totalPrice: getTotalPrice(state),
    deliveryPrice: getDeliveryPriceDescription(state),
    isCartLoading: getIsCartLoading(state),
    isCartEmpty: getIsCartEmpty(state)
});

const mapDispatchToProps = dispatch => ({
    submitCheckout() {
        return dispatch(submit('checkout'));
    }
});

const Checkout = ({
    isValid,
    products,
    quantityByID,
    cartSummary,
    totalPrice,
    deliveryPrice,
    isCartLoading,
    submitCheckout,
    isCartEmpty
}) => (
    <Container>
        {isCartEmpty && (
            <Redirect
                to={{
                    pathname: '/cart',
                    state: { checkout: true }
                }}
            />
        )}
        <PageHeader>
            <Title>Checkout</Title>
        </PageHeader>
        <StyledCheckout>
            <CheckoutForm />
            <CartSummary
                isValid={isValid}
                products={products}
                quantityByID={quantityByID}
                cartSummary={cartSummary}
                totalPrice={totalPrice}
                deliveryPrice={deliveryPrice}
                isCartLoading={isCartLoading}
                submitCheckout={submitCheckout}
            />
        </StyledCheckout>
    </Container>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
