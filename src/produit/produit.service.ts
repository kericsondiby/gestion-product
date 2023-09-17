import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Produit } from './schemas/produit.schema';

@Injectable()
export class ProduitService {
    constructor(
        @InjectModel(Produit.name)
        private produitModel: mongoose.Model<Produit>
    ){}

    async findAll(): Promise<Produit[]>{
        const produit = await this.produitModel.find()
        return produit
    }

    async create(produit:Produit):Promise<Produit>{
        const res = await this.produitModel.create(produit)
        return res
    }

    // async findById(id: string):Promise<Produit>{
    //     const produit = await this.produitModel.findById(id)
    //     if (!produit) {
    //         throw new NotFoundException("Produit n'exist pas")
    //     }
    //     return produit
    // }


    async findByNom(nom: string):Promise<Produit>{
        const produit = await this.produitModel.findOne({nom})
        if (!produit) {
            throw new NotFoundException("Produit n'exist pas")
        }
        return produit
    }

    async findByStock(stock: string):Promise<Produit[]>{
        const produit = await this.produitModel.find({stock:stock})
        
        if (!produit) {
            throw new NotFoundException("Produit n'exist pas")
        }
        return produit
    }

    async updateById(id: string, produit:Produit):Promise<Produit>{
        return produit = await this.produitModel.findByIdAndUpdate(id, produit, {
            new:true,
            runValidators:true
        })
        
    }

    async deleteById(id: string):Promise<Produit>{
        return await this.produitModel.findByIdAndDelete(id)
    }
}
