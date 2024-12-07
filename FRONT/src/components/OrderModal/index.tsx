import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export const OrderModal = ({ order, visible, onClose }: OrderModalProps) => {
    if(!visible || !order) {
        return
    }

    const total = order.products.reduce((total, {product, quantity}) => {
        return total + (product.price * quantity);
    }, 0)

    return (
        <>
            <Overlay>
                <ModalBody>
                    <header>
                        <strong>Mesa {order.table}</strong>

                        <button type='button' onClick={onClose}>❌</button>
                    </header>

                    <div className='status'>
                        <small>Status do Pedido</small>
                        <div>
                            <span>
                                {order.status === 'WAITING' && '🕚'}
                                {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
                                {order.status === 'DONE' && '✅'}
                            </span>
                            <strong>
                                {order.status === 'WAITING' && 'Fila de espera'}
                                {order.status === 'IN_PRODUCTION' && 'Em produção'}
                                {order.status === 'DONE' && 'Concluído'}
                            </strong>
                        </div>
                    </div>

                    <OrderDetails>
                        <strong>Itens</strong>

                        <ul>
                            {order.products.map(({id, product, quantity}) => (
                                <li key={id}>
                                    <img src='' alt='' height='40px' width='40px' />
                                    <span className='quantity'>{quantity} x</span>

                                    <div className='product-details'>
                                        <strong>{product.name}</strong>
                                        <span>{formatCurrency(product.price)}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className='total'>
                            <span>Total</span>
                            <strong>{formatCurrency(total)}</strong>
                        </div>
                    </OrderDetails>

                    <Actions>
                        <button type='button' className='initial'>
                            Inicial Produção
                        </button>

                        <button type='button' className='cancel'>
                            Cancelar Pedido
                        </button>
                    </Actions>
                </ModalBody>
            </Overlay>
        </>
    );
};
