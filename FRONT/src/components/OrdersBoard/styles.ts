import styled from 'styled-components';

export const Board = styled.div`
    padding: 16px;
    font-weight: 600;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    color: #3c3c3c;
    flex: 1;

    > header {
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
    }
`

export const Container = styled.button`
    height: 128px;
    width: 100%;
    border: 1px solid rgba(204, 204, 204, 0.4);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 8px;
    margin-top: 24px;
    transition: 0.3s all;

    &:hover {
        background: #fae9e9;
    }
`
