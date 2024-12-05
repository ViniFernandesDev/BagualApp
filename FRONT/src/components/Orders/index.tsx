import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { Order } from '../../types/Order';

export const Orders = () => {
    const ordersMock: Order[] = [
        {
          id: "1",
          table: "A1",
          status: "open",
          products: [
            {
              id: "101",
              quantity: 2,
              product: {
                name: "Cheeseburger",
                imagePath: "/images/cheeseburger.jpg",
                price: 15.5,
              },
            },
            {
              id: "102",
              quantity: 1,
              product: {
                name: "French Fries",
                imagePath: "/images/french-fries.jpg",
                price: 7.0,
              },
            },
          ],
        },
        {
          id: "2",
          table: "B2",
          status: "in progress",
          products: [
            {
              id: "103",
              quantity: 3,
              product: {
                name: "Pizza Margherita",
                imagePath: "/images/pizza-margherita.jpg",
                price: 25.0,
              },
            },
          ],
        },
        {
          id: "3",
          table: "C3",
          status: "closed",
          products: [
            {
              id: "104",
              quantity: 1,
              product: {
                name: "Spaghetti Carbonara",
                imagePath: "/images/spaghetti-carbonara.jpg",
                price: 18.0,
              },
            },
            {
              id: "105",
              quantity: 2,
              product: {
                name: "Tiramisu",
                imagePath: "/images/tiramisu.jpg",
                price: 10.0,
              },
            },
          ],
        },
      ];

    return (
        <Container>
            <OrdersBoard icon='🕚' title='Fila de espera' orders={ordersMock} />
            <OrdersBoard icon='👨‍🍳' title='Em produção' orders={[]} />
            <OrdersBoard icon='✅' title='Pronto' orders={[]} />
        </Container>
    );
};
