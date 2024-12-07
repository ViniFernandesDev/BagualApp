import { ModalBody, OrderDetails, Overlay } from './styles';

import { Order } from '../../types/Order';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
}

export const OrderModal = ({ order, visible }: OrderModalProps) => {
    if(!visible || !order) {
        return
    }

    return (
        <>
            <Overlay>
                <ModalBody>
                    <header>
                        <strong>Mesa {order.table}</strong>

                        <button type='button'>❌</button>
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


                    </OrderDetails>
                </ModalBody>
            </Overlay>
        </>
    );
};
