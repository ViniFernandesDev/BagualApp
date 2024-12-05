
import { Order } from '../../types/Order';
import { Board, Container } from './styles';
interface OrdersBoardProps {
    title: string;
    icon: string;
    orders: Order[];
}

export const OrdersBoard = ({ title, icon, orders }: OrdersBoardProps) => {
    return (
        <Board>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>(1)</span>
            </header>

            {orders?.map(order => (
                <Container
                    type='button'
                    key={order.id}
                >
                    <strong>Mesa {order.table}</strong>
                    <span>
                        {order.products.length}{' '}
                        {order.products.length > 1 ? 'Itens' : 'Item'}
                    </span>
                </Container>
            ))}
        </Board>
    );
};
