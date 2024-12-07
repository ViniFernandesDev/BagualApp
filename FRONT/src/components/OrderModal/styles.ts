import styled from 'styled-components';

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(4.5px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalBody = styled.div`
    background: #fff;
    width: 500px;
    border-radius: 8px;
    padding: 32px;

    & > header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & strong {
            font-size: 24px;
        }

        & button {
            border:none;
            background: none;
        }
    }

    .status {
        margin-top: 32px;

        small {
            opacity: 0.8;
        }

        div {
            display: flex;
            align-items: center;
            gap: 3px;
            margin-top: 5px;

            & strong {
                font-size: 18px;
            }
        }
    }
`

export const OrderDetails = styled.div`
    margin-top: 32px;

    & > strong {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.8;
    }

    & ul {
        list-style: none;
        margin-top: 16px;
        gap:16px;
        display: flex;
        flex-direction: column;

        & li {
            display: flex;
            align-items: center;
            gap: 6px;

            & img {
                border-radius: 6px;
                border: 1px solid #000;
            }

            & .quantity {
                font-size: 14px;
                color: #666666;
            }

            & .product-details {
                display: flex;
                flex-direction: column;
                font-size: 16px;

                & span {
                    font-weight: 300;
                    color: #666666;
                }
            }
        }
    }
`
