
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export const Orders = () => {
    return (
        <Container>
            <OrdersBoard />
            <OrdersBoard />
        </Container>
    );
};
