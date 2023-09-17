import { Stock } from "src/stock/schemas/stock.schema"
import { ApiProperty } from '@nestjs/swagger';
import { Type} from "class-transformer";


class Stocks {
    readonly nom_stock:string
    readonly quantity:number
}

export class CreateProduitDto{
    @ApiProperty({   
        example: 'Xiaomi',   
        description: 'Description du produit',    
        format: 'string',   
      }) 
    readonly nom: string
    @ApiProperty({   
        example: 'Xiaomi',   
        description: 'Description du produit',    
        format: 'string',   
      })
    readonly description: string
    @ApiProperty({   
        example: 'Xiaomi',   
        description: 'Description du produit',    
        format: 'string',   
      })
    readonly code: string
    @ApiProperty({   
        example: 1200,   
        description: 'Prix vente',    
        format: 'number',   
      })
    readonly prix_de_vente: number
    @ApiProperty({   
        example: 1000,   
        description: 'Prix achat',    
        format: 'number',   
      })
    readonly cout_achat: number
    @ApiProperty({   
        example: 'Redmi',   
        description: 'Sous-categorie',    
        format: 'string',   
      })
    readonly sous_categorie: string
    @ApiProperty({   
        example: [{'quantity':100, "stock":"ABOBO"}],   
        description: 'Description du produit',    
        format: 'array',   
      })
    readonly stock : {nom_stock:string, quantity:number}[]
}