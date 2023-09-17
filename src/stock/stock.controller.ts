import { Body, Controller, Get, Post } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './schemas/stock.schema';

@Controller('stock')
export class StockController {
    constructor(private stockService: StockService){}
    @Get()
    async getAllProduits(): Promise<Stock[]>{
        return this.stockService.findAll();
    }

    @Post()
    async createProduit(@Body() produit): Promise<Stock>{
        return this.stockService.create(produit)
    }
}
