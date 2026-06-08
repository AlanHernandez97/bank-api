import { Request, Response } from 'express';
import Bank from '../models/Bank';

export const getBanks = async (
  req: Request,
  res: Response
) => {
  try {
    const banks = await Bank.find();

    res.status(200).json(banks);
  } catch (error) {
    res.status(500).json({
      message: 'Error obteniendo bancos',
      error
    });
  }
};

export const createBank = async (req: Request, res: Response) => {
  try {
    const {
      name,
      age,
      isActive,
      image,
      description
    } = req.body;

    // Validación básica
    if (!name) {
      return res.status(400).json({
        message: 'El nombre es obligatorio'
      });
    }

    const bank = new Bank({
      name,
      age,
      isActive,
      image,
      description
    });

    await bank.save();

    res.status(201).json(bank);
  } catch (error) {
    res.status(500).json({
      message: 'Error creando banco',
      error
    });
  }
};