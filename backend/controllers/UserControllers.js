import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response); //200 é o status code, que significa que a requisição foi bem-sucedida.
    //  O resultado fica guardado na variável response.
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      //findOne é um método do Sequelize que retorna o primeiro registro que satisfaz a condição.
      where: {
        id: req.params.id, //req.params.id é o id que vem da rota, que é o id do usuário que queremos buscar.
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" }); //
  }
};

export const CreateUser = async (req, res) => {
  try {
    await User.create(req.body); // o req.body é o corpo da requisição, que é o objeto que contém os dados do usuário que queremos criar.
    res.status(201).json({ message: "User Created" }); //201 é o status code, que significa que a requisição foi bem-sucedida.
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" }); //
  }
};

//adiconar depois https codes, para erros.

export const UpdateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
