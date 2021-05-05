import React from 'react';

import styled from 'styled-components';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

function Header() {
    return (
        <Container>
            <PersonIcon/>
            <ForumIcon/>
        </Container>
    )
}

export default Header
