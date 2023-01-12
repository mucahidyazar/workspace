import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";

@ObjectType()
//extends BaseEntity database ile typeorm sayesinde baglanti kurup User.find User.create gibi activiteleri yapmamiza izin verir.
@Entity()
export class User extends BaseEntity {

    @Field(() => ID) //GraphQL de gozukmesini istediklerimize @Filed() veriyoruz.
    @PrimaryGeneratedColumn()
    id: number; //Typescript type

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column("text", {unique: true})
    email: string;

    // //SadeceGraphqL Typei ekliyoruz //name firstname ve lastnamenin birlesimi olacak
    // @Field()
    // name: string;

    @Field()
    name(@Root() parent: User): string {
        return `${parent.firstName} ${parent.lastName}`
    }

    @Column()
    password: string;
    
    @Column('bool', { default: false} )
    confirmed: boolean;

}