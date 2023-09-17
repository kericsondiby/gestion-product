import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { Produit } from './schemas/produit.schema';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Controller('produit')
export class ProduitController {
    constructor(private produitService: ProduitService){}
    @Get()
    async getAllProduits(): Promise<Produit[]>{
        return this.produitService.findAll();
    }

    @Post()
    async createProduit(@Body() produit:CreateProduitDto): Promise<Produit>{
        return this.produitService.create(produit)
    }

    // @Get(':id')
    // async getProduit(@Param('id') id:string): Promise<Produit>{
    //     return this.produitService.findById(id);
    // }

    @Get(':nom')
    async getProduitByNom(@Param('nom') nom:string): Promise<Produit>{
        return this.produitService.findByNom(nom);
    }

    @Get('stock/:stock')
    async getProduitByStock(@Param('stock') stock:string): Promise<Produit[]>{
        return this.produitService.findByStock(stock);
    }


    @Put(':id')
    async updateProduit(@Param('id') id:string, @Body() produit:UpdateProduitDto): Promise<Produit>{
        return this.produitService.updateById(id, produit);
    }


    @Delete(':id')
    async deleteProduit(@Param('id') id:string): Promise<Produit>{
        return this.produitService.deleteById(id);
    }
}
