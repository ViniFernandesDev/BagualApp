import styled from 'styled-components';

export const Container = styled.header`
    background: #D73035;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    padding: 20px;

    & h1 {
        font-size: 48px;
        font-weight: 700;
        font-family: "Dancing Script", cursive;
    }

    & h2 {
        font-size: 16px;
        font-weight: 400;
    }

    & img {
        width: 90px;
        border-radius: 8px;
    }
`
