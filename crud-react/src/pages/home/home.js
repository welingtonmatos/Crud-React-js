import React from 'react';
import './home.css';

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

function Cadastro(props) {

    return (
        <div className="home">
            <div className="form-home">
                <h1>Usuários Cadastrados</h1>

                <Table className="tabela">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Larry the Bird</td>
                            <td>a</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>

                <Form className="linhaHome">
                    <Row className="linhaHome">
                        <Form.Group className="form-btn-home">
                            <Button className="botao" variant="success" type="submit">
                                Cadastrar Usuário
                            </Button>
                        </Form.Group>

                        <Form.Group className="form-btn-home">
                            <Button className="botao" variant="warning" type="submit">
                                Editar Usuário
                            </Button>
                        </Form.Group>

                        <Form.Group className="form-btn-home">
                            <Button className="botao" variant="danger" type="submit">
                                Excluir Usuário
                            </Button>
                        </Form.Group>

                        <Form.Group className="form-btn-home">
                            <Button className="botao" variant="primary" type="submit">
                                Sair
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Cadastro;