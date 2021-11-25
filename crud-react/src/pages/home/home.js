import React from 'react';
import './home.css';

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

function Cadastro(props) {

    return (
        <div className="home">
            <div className="form-home">
                <h1>Usuários Cadastrados</h1>

                <Table striped className="tabela">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>

                <Form className="linha2">
                    <Row className="linha2">
                        <Form.Group className="form-btn">
                            <Button className="codigo" variant="primary" type="submit">
                                Código no GitHub
                            </Button>
                        </Form.Group>

                        <Form.Group className="form-btn">
                            <Button className="sair" variant="danger" type="submit">
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