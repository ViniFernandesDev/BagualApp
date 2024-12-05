
import { Board, Container } from './styles';

export const OrdersBoard = () => {
    return (
        <Board>
            <header>
                <span>🕚</span>
                <strong>Fila de espera</strong>
                <span>(1)</span>
            </header>

            <Container type='button'>
                <strong>Mesa 2</strong>
                <span>2 Itens</span>
            </Container>

            <Container type='button'>
                <strong>Mesa 2</strong>
                <span>2 Itens</span>
            </Container>
        </Board>
    );
};
