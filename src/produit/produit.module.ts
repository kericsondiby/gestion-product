import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProduitSchema } from './schemas/produit.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "Produit", schema:ProduitSchema}])],
  providers: [ProduitService],
  controllers: [ProduitController]
})
export class ProduitModule {}
