
import { Board, Container, OrdersContainer } from './styles';

export const Orders = () => {
    return (
        <Container>
            <Board>
                <header>
                    <span>🕚</span>
                    <strong>Fila de espera</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </OrdersContainer>

                <OrdersContainer type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <span>🕚</span>
                    <strong>Fila de espera</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </OrdersContainer>

                <OrdersContainer type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <span>🕚</span>
                    <strong>Fila de espera</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </OrdersContainer>

                <OrdersContainer type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </OrdersContainer>
            </Board>
        </Container>
    );
};
