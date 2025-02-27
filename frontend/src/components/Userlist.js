import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Links } from "react-router-dom";

const Userlist = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users ");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered ">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className=" table  is-striped is-fullwidth">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Idade</th>
              <th>CPF</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.idade}</td>
                <td>{user.cpf}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => DeleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
// is-half : metade do tamanho do container columns
