
import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, Container } from './styles';
interface OrdersBoardProps {
    title: string;
    icon: string;
    orders: Order[];
}

export const OrdersBoard = ({ title, icon, orders }: OrdersBoardProps) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleOpenOrder = (order: Order) => {
        setIsModalVisible(true)
        setSelectedOrder(order)
    }

    return (
        <>
            <Board>
                <OrderModal
                    order={selectedOrder}
                    visible={isModalVisible}
                />

                <header>
                    <span>{icon}</span>
                    <strong>{title}</strong>
                    <span>(1)</span>
                </header>

                {orders?.map(order => (
                    <Container
                        type='button'
                        key={order.id}
                        onClick={() => handleOpenOrder(order)}
                    >
                        <strong>Mesa {order.table}</strong>
                        <span>
                            {order.products.length}{' '}
                            {order.products.length > 1 ? 'Itens' : 'Item'}
                        </span>
                    </Container>
                ))}
            </Board>
        </>
    );
};
