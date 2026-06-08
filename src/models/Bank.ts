import mongoose, { Schema } from 'mongoose';
import { IBank } from '../types/banks';

const bankSchema = new Schema<IBank>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      trim: true,
      default: ''
    },
    description: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

const Bank = mongoose.model<IBank>(
  'Bank',
  bankSchema
);

export default Bank;