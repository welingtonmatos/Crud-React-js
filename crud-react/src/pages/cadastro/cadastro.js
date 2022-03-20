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
                <h1>Cadastro de Clientes</h1>

                <Form.Label className="info">Infomações Pessoais</Form.Label>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input
                        className="campoTexto"
                        type="text"
                        placeholder="* Nome:"
                        minLength="3"
                        maxLength="100"
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input
                        className="campoTexto"
                        type="text"
                        placeholder="* CPF:"
                        mask="999.999.999-99"
                        />
                    </Form.Group>
                </Row>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Telefone Residencial:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Telefone Comercial:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Celular:" />
                    </Form.Group>
                </Row>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="E-mail:" />
                    </Form.Group>
                </Row>

                <Form.Label className="EndLabel">Endereço</Form.Label>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="* Cep:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="* Logradouro:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="* Bairro:" />
                    </Form.Group>
                </Row>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="* Cidade:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Complemento:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="* UF:" />
                    </Form.Group>
                </Row>

                <Row className="linha2 mb-3">
                    <Form.Group className="form-btn">
                        <Button className="botoes" variant="success" type="submit">
                            Cadastrar
                        </Button>
                    </Form.Group>

                    <Form.Group className="form-btn">
                        <Button className="botoes" variant="danger" type="submit">
                            Limpar Campos
                        </Button>
                    </Form.Group>

                    <Form.Group className="form-btn">
                        <Button className="botoes" variant="primary" type="submit">
                            Voltar
                        </Button>
                    </Form.Group>
                </Row>

            </Form>
        </div>
    );
}

export default Cadastro;