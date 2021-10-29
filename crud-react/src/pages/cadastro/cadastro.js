import React from 'react';
import './cadastro.css';

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Cadastro() {

    return (
        <div className="cadastro">
            <Form className="form-cadastro">
                <h1>Cadastro</h1>
                <Row className="linha mb-3">
                    <Form.Group as={Col} className="Nome">
                        <Form.Control className="campoTexto" type="text" placeholder="Nome:" />
                    </Form.Group>

                    <Form.Group as={Col} className="CPF">
                        <Form.Control className="campoTexto" type="password" placeholder="CPF:" />
                    </Form.Group>
                </Row>

                <Row className="linha1 mb-3">
                    <Form.Group as={Col} className="tipoTelefone">
                        <Form.Select className="campoTexto" defaultValue="T. Residencial">
                            <option>T. Residencial</option>
                            <option>T. Comercial</option>
                            <option>Celular</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} className="Telefone">
                        <Form.Control className="campoTexto" placeholder="Telefone:" />
                    </Form.Group>

                    <Form.Group as={Col} className="Email">
                        <Form.Control className="campoTexto" placeholder="E-mail:"/>
                    </Form.Group>
                </Row>

                <Form.Label>Endereço</Form.Label>

                <Row className="linha2 mb-3">
                    <Form.Group as={Col} className="Cep">
                        <Form.Control className="campoTexto" placeholder="Cep:" />
                    </Form.Group>

                    <Form.Group as={Col} className="Logradouro">
                        <Form.Control className="campoTexto" placeholder="Logradouro: Av. Indepen..." />
                    </Form.Group>

                    <Form.Group as={Col} className="Bairro">
                        <Form.Control className="campoTexto" placeholder="Bairro: Condomínio..." />
                    </Form.Group>
                </Row>

                <Row className="linha3 mb-3">
                    <Form.Group as={Col} className="Cidade">
                        <Form.Control className="campoTexto" placeholder="Cidade:" />
                    </Form.Group>

                    <Form.Group as={Col} className="Complemento">
                        <Form.Control className="campoTexto" placeholder="Complemento:" />
                    </Form.Group>

                    <Form.Group as={Col} className="UF">
                        <Form.Control className="campoTexto" placeholder="UF:" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Cadastro;