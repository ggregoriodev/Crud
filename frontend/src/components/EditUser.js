import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { emailValidation } from "../Functions/emailvalidation";

const EditUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCPF] = useState("");
  const [isValid, setisValid] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const handleEmailChange = (e) => {
    const email = e.target.value; // Obtém o valor do input
    setEmail(email); // Atualiza o estado do e-mail
    setisValid(emailValidation(email)); // Atualiza o estado da validade do e-mail
  };

  const SaveUser = async (e) => {
    e.preventDefault(); //Evita que a página recarregue quando o formulário for enviado.
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
        nome,
        email,
        idade,
        cpf,
      });
      navigate("/"); //Depois de salvar os dados, leva o usuário de volta para a página inicial.
      //Essa função vem do useNavigate (do React Router) e serve para mudar de página sem precisar recarregar o site.
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    setNome(response.data.nome);
    setEmail(response.data.email);
    setIdade(response.data.idade);
    setCPF(response.data.cpf);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={SaveUser}>
          <div className="field">
            <label htmlFor="" className="label">
              Nome
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nome}
                onChange={(e) => setNome(e.target.value)} //Agora, sempre que o usuário digitar no campo, onChange chama setIdade(e.target.value), que atualiza Idade com o novo valor.
                placeholder="Nome"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            {isValid === null ? null : (
              <p className={`help ${isValid ? "is-success" : "is-danger"}`}>
                {isValid ? "E-mail válido!" : "E-mail inválido!"}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="" className="label">
              Idade
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Idade"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="" className="label">
              CPF
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
                placeholder="CPF"
              />
            </div>
          </div>
          <div className="field"></div>
          <button type="submit" className="button is-succes">
            salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
