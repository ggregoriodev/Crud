import User from "../models/UserModel.js";
import createHttpError from "http-errors";

export const getUsers = async (req, res, next) => {
  try {
    const response = await User.findAll();

    if (!response.length) {
      return next(createHttpError(404, "Nenhum usuário encontrado"));
    }

    res.status(200).json(response);
  } catch (error) {
    next(createHttpError(500, "Erro interno ao buscar usuários"));
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      return next(createHttpError(404, "Nenhum usuário encontrado"));
    }

    res.status(200).json(response);
  } catch (error) {
    next(createHttpError(500, "Erro interno ao buscar usuário"));
  }
};

export const CreateUser = async (req, res, next) => {
  try {
    const affectedRows = await User.create(req.body);

    if (affectedRows[0] === 0) {
      return next(createHttpError(404, "Usuário nçao criado tente novamente"));
    }
    res.status(201).json({ message: "User Criado" });
  } catch (error) {
    next(createHttpError(500, "Erro interno ao Criar usuários"));
  }
};

export const UpdateUser = async (req, res, next) => {
  try {
    const affectedRows = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows[0] === 0) {
      return next(createHttpError(404, "Id não encontrado"));
    }

    res.status(200).json({ message: "User atualizado" });
  } catch (error) {
    console.log(error.message);
    next(createHttpError(500, "Erro interno ao atualizar usuários"));
  }
};

export const DeleteUser = async (req, res, next) => {
  try {
    const affectedRows = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows === 0) {
      return next(createHttpError(404, "Id não encontrado"));
    }

    res.status(200).json({ message: "User Deletado" });
  } catch (error) {
    console.log(error.message);
    next(createHttpError(500, "Erro interno ao deletar usuários"));
  }
};
