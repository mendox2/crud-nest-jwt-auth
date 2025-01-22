import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne} from "typeorm";

@Entity()
export class Cat {

    // @PrimaryGeneratedColumn()
    @Column({primary: true, generated: true})
    id: number;
    
    @Column()
    name: string;

    @Column()
    age: number;
    
    @ManyToOne(() => Breed, (breed) => breed.id, {
        
        eager: true, //* Para que traiga la relación
        
    })
    breed: Breed;
    
    @DeleteDateColumn()
    deleteDate: Date;
}
