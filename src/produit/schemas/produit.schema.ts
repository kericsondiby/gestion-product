import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})

export class Produit {
    @Prop()
    nom: string;

    @Prop()
    description: string;

    @Prop()
    code: string;

    @Prop()
    prix_de_vente: number;

    @Prop()
    cout_achat: number;

    @Prop()
    sous_categorie: string;

    @Prop({
        type:[{quantity:{type:Number}, stock:{type:String}}]
      })
      stock: { quantity: number, nom_stock: string }[];
    
}

export const ProduitSchema = SchemaFactory.createForClass(Produit)