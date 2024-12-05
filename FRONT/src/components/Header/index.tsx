import { Container, Content } from './styles';

import beer_and_sanduich from '../../assets/images/beer_and_sanduich.png'

export const Header = () => {
    return (
        <Container>
            <Content>
                <div>
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>

                <img src={beer_and_sanduich} alt="" />
            </Content>
        </Container>
    );
};
