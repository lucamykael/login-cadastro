import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Remember = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { remember } = useAuth();

    const handleRemember = () => {
        if (!email) {
            setError("Preencha o campo");
            return;
        }
        const res = remember(email);

        if (res) {
            setError(res);
            return;
        }

        alert("E-mail enviado com sucesso");
        alert("Verifique sua caixa de entrada");
        navigate("/");
    }

    return (
        <C.Container>
            <C.Label>Esqueceu sua senha</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Enviar" onClick={handleRemember} />
                <C.LabelRemember>
                    <C.Strong>
                        <Link to="/">Lembra sua senha?</Link>
                    </C.Strong>
                </C.LabelRemember>
            </C.Content>
        </C.Container>
    )
};

export default Remember;