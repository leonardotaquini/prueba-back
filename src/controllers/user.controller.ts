import { Request, Response } from "express";
import User from "../models/User.model";

export const createUser = async (req:Request, res:Response) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req:Request, res:Response) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req:Request, res:Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req:Request, res:Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.update(req.body, {
        where: { id: req.params.id },
        });
    return res.status(200).json(updatedUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req:Request, res:Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const deletedUser = await user.destroy();
    return res.status(204).json(deleteUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};