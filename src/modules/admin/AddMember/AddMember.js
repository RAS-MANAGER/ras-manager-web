import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../../utils/components/CustomInput/CustomInput";

import "./AddMember.css";

export default function AddMember() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleInputChange(e, changeFunction) {
        changeFunction(e.target.value);
    }

    return (
        <div className="add-member-view">

            <div className="add-member-title">CADASTRAR MEMBRO</div>

            <CustomInput
                type="text"
                placeholder="Nome"
                onChange={(e) => handleInputChange(e, setNome)}
                maxLength={50}
            />
            <CustomInput
                type="text"
                placeholder="E-mail"
                onChange={(e) => handleInputChange(e, setEmail)}
                maxLength={50}
            />
            <CustomInput
                type="password"
                placeholder="Senha"
                onChange={(e) => handleInputChange(e, setSenha)}
                maxLength={30}
            />
            <CustomInput
                type="number"
                placeholder="CPF"
                onChange={(e) => handleInputChange(e, setCPF)}
                maxLength={15}
            />
            <CustomInput
                type="number"
                placeholder="Telefone"
                onChange={(e) => handleInputChange(e, setTelefone)}
                maxLength={15}
            />

            <button className="back-to-members">VOLTAR</button>

            <button className="next-member-register"
                onClick={() => {
                    Axios.post("http://localhost:3001/pessoas/cadastrar/" + nome + "/" + email + "/" + senha + "/" + cpf + "/" + telefone).then((response) => {
                        ///
                    });
                }}
            >SALVAR INFORMAÇÕES PESSOAIS</button>

            <button>
                <Link to={"/cadastro/habilidades"}>PRÓXIMO</Link>
            </button>
        </div>
    );
}