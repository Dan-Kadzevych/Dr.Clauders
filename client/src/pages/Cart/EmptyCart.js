import React from 'react';
import styled from 'styled-components';

import { ButtonAlt, A } from 'elements';

const StyledEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;
const Link = styled(A)`
    :link,
    :visited {
        color: #fff;
        margin-top: 1.5rem;
    }
`;

const EmptyCart = () => (
    <StyledEmptyCart>
        Ваша корзина пуста.
        <Link to="/shop">
            <ButtonAlt>Вернуться в магазин</ButtonAlt>
        </Link>
    </StyledEmptyCart>
);

export default EmptyCart;
