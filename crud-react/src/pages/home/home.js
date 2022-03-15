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
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Form.Group className="form-btn-fundo">
                                    <Button className="form-botao" variant="warning" type="submit">
                                        Editar
                                    </Button>

                                    <Button className="form-botao" variant="danger" type="submit">
                                        Excluir
                                    </Button>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <Form.Group className="form-btn-fundo">
                                    <Button className="form-botao" variant="warning" type="submit">
                                        Editar
                                    </Button>

                                    <Button className="form-botao" variant="danger" type="submit">
                                        Excluir
                                    </Button>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>a</td>
                            <td>@twitter</td>
                            <td>
                                <Form.Group className="form-btn-fundo">
                                    <Button className="form-botao" variant="warning" type="submit">
                                        Editar
                                    </Button>

                                    <Button className="form-botao" variant="danger" type="submit">
                                        Excluir
                                    </Button>
                                </Form.Group>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Form className="linhaHome">
                    <Row className="linhaHome">
                        <Form.Group className="form-btn-home">
                            <Button className="botao" variant="success" type="submit">
                                Cadastrar Novo Usuário
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