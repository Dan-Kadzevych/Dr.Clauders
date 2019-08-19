import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { addToCart } from 'pages/Cart/duck/operations';
import {
    getIsProductAddedFunc,
    getIsProductRequestedFunc
} from 'pages/Cart/duck/selectors';
import { getCurrentLocation } from 'duck/selectors';
import { NotFound } from 'pages';
import { operations, selectors, utils } from './duck';
import Hero from './Hero';
import ProductsGrid from './ProductsGrid';
import { gridTemplate } from 'styles/mixins';
import { color_grey_light } from 'styles/variables';

const Container = styled.div`
    grid-column: full-start / full-end;

    ${gridTemplate};
    min-height: calc(100vh - 5rem);
    align-content: start;
`;

const Results = styled.div`
    grid-column: center-start / center-end;
    margin-top: 5rem;
    color: ${color_grey_light};
`;

const mapStateToProps = state => {
    const category = selectors.getCurrentCategory(state);

    return {
        products: selectors.getProducts(state),
        categoryName: utils.getCategoryName(category),
        categoryID: utils.getCategoryID(category),
        categoryMedia: utils.getCategoryMedia(category),
        isProductRequestedFunc: getIsProductRequestedFunc(state),
        isProductAddedFunc: getIsProductAddedFunc(state),
        isLoading: selectors.isLoading(state),
        location: getCurrentLocation(state)
    };
};

const mapDispatchToProps = dispatch => ({
    getProductsByCategory(filter, categoryID) {
        return dispatch(operations.fetchProducts(filter, { categoryID }));
    },
    getAllProducts(filter) {
        return dispatch(operations.fetchProducts(filter));
    },
    addToCart(ID) {
        return dispatch(addToCart(ID));
    }
});

class Products extends Component {
    componentDidMount() {
        const {
            categoryID,
            location,
            getProductsByCategory,
            getAllProducts
        } = this.props;

        if (categoryID) {
            getProductsByCategory(location, categoryID);
        }

        if (location === '/shop') {
            getAllProducts(location);
        }
    }
    componentDidUpdate({ location: prevLocation }) {
        const { categoryID, location } = this.props;

        if (categoryID && location !== prevLocation) {
            this.props.getProductsByCategory(location, categoryID);
        }
    }

    render() {
        const {
            products,
            categoryName,
            categoryMedia,
            addToCart,
            isProductAddedFunc,
            isProductRequestedFunc,
            isLoading,
            categoryID,
            location
        } = this.props;

        return categoryID || location === '/shop' ? (
            <Container>
                {categoryName && (
                    <Hero title={categoryName} media={categoryMedia} />
                )}
                <Results>Товаров: {products.length}</Results>
                <ProductsGrid
                    isLoading={isLoading}
                    products={products}
                    addToCart={addToCart}
                    isAdded={isProductAddedFunc}
                    isRequested={isProductRequestedFunc}
                />
            </Container>
        ) : (
            <NotFound />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
