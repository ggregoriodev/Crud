import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { emailValidation } from "../Functions/emailvalidation";

const AddUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCPF] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setEmailIsValid(emailValidation(email));
  };

  const SaveUser = async (e) => {
    e.preventDefault();
    if (!emailIsValid) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", {
        nome,
        email,
        idade,
        cpf,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={SaveUser}>
          <div className="field">
            <label className="label">Nome</label>
            <div className="control">
              <input
                type="name"
                className="input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            {emailIsValid !== null && (
              <p
                className={`help ${emailIsValid ? "is-success" : "is-danger"}`}
              >
                {emailIsValid ? "E-mail válido!" : "E-mail inválido!"}
              </p>
            )}
          </div>

          <div className="field">
            <label className="label">Idade</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Idade"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">CPF</label>
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

          <button type="submit" className="button is-success">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
