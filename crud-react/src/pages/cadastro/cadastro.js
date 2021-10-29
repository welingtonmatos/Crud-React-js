import React from 'react';
import './cadastro.css';

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { BiChevronDown } from 'react-icons/bi';

function Cadastro(props) {

    return (
        <div className="cadastro">
            <Form className="form-cadastro">
                <h1>Cadastro</h1>

                <Form.Label className="info">Infomações Pessoais</Form.Label>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input
                        className="campoTexto"
                        type="text"
                        placeholder="Nome:"
                        minLength="3"
                        maxLength="100"
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input
                        className="campoTexto"
                        type="text"
                        placeholder="CPF:"
                        mask="999.999.999-99"
                        />
                    </Form.Group>
                </Row>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <BiChevronDown className="seta" size={30} />
                        <Form.Select className="campoTexto" defaultValue="Telefone Residencial">
                            <option>Telefone Residencial</option>
                            <option>Telefone Comercial</option>
                            <option>Celular</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Telefone:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="E-mail:" />
                    </Form.Group>
                </Row>

                <Form.Label className="EndLabel">Endereço</Form.Label>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Cep:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Logradouro:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Bairro:" />
                    </Form.Group>
                </Row>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Cidade:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="Complemento:" />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input className="campoTexto" placeholder="UF:" />
                    </Form.Group>
                </Row>

                <Form.Label className="labelSenha">Cadastre sua Senha</Form.Label>

                <Row className="linha mb-3">
                    <Form.Group as={Col} className="campos">
                        <input
                            className="campoTexto"
                            placeholder="Digite sua senha:"
                            type="password"
                            maxLength="6"
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="campos">
                        <input
                            className="campoTexto"
                            placeholder="Repita a senha:"
                            type="password"
                            maxLength="6"
                        />
                    </Form.Group>
                </Row>

                <Row className="linha2 mb-3">
                    <Form.Group as={Col} className="form-btn">
                        <Button className="cadastrar" variant="success" type="submit">
                            Cadastrar
                        </Button>
                    </Form.Group>

                    <Form.Group as={Col} className="form-btn">
                        <Button className="limpar" variant="danger" type="submit">
                            Limpar Campos
                        </Button>
                    </Form.Group>

                    <Form.Group as={Col} className="form-btn">
                        <Button className="voltar" type="submit">
                            Voltar
                        </Button>
                    </Form.Group>
                </Row>

            </Form>
        </div>
    );
}

export default Cadastro;