import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { H1, ButtonAlt, PageHeader, A } from 'elements';
import { operations, selectors } from './duck';
import { color_primary, color_secondary } from 'styles/variables';

const Container = styled.div`
    grid-column: center-start / center-end;
    margin-bottom: 8.5rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5rem;
    align-items: start;
`;

const Title = styled(H1)`
    font-weight: 300;
`;

const StyledLink = styled(A)`
    :link,
    :visited {
        color: ${color_primary};
        margin-bottom: 1rem;

        :hover {
            color: ${color_secondary};
        }
    }
`;

const mapStateToProps = state => ({
    isAdmin: selectors.getIsAdmin(state)
});

const mapDispatchToProps = dispatch => ({
    logout() {
        return dispatch(operations.logout());
    }
});

const Account = ({ match, logout, isAdmin }) => (
    <Container>
        <PageHeader>
            <Title>Account</Title>
        </PageHeader>
        <ul>
            {isAdmin && <StyledLink to="/admin">Admin</StyledLink>}
            <li>
                <ButtonAlt onClick={logout}>Logout</ButtonAlt>
            </li>
        </ul>
        <Switch>
            <Route
                exact
                path={`${match.path}`}
                component={() => <div>Main</div>}
            />
            <Route
                exact
                path={`${match.path}/orders`}
                component={() => <div>'orders'</div>}
            />
            <Route
                exact
                path={`${match.path}/discount`}
                component={() => <div>'orders'</div>}
            />
        </Switch>
    </Container>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);
