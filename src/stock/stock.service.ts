import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock } from './schemas/stock.schema';
import mongoose from 'mongoose';

@Injectable()
export class StockService {
    constructor(
        @InjectModel(Stock.name)
        private stockModel: mongoose.Model<Stock>
    ){}

    async findAll(): Promise<Stock[]>{
        const stock = await this.stockModel.find()
        return stock
    }

    async create(stock:Stock):Promise<Stock>{
        const res = await this.stockModel.create(stock)
        return res
    }
}
