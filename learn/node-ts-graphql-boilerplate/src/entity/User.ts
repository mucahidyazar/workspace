import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import {Profile} from "./Profile";
import { Photo } from "./Photo";

@Entity("Mucahid")
export class User extends BaseEntity { //Entityi import edip kullanmak icin typeorm un extends ozelligini kullaniyoruz.

    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text", unique: true })
    email: string;

    @Column({ type: "bool", default: false })
    confirmed: boolean;

    @Column({ type: "varchar", length: "230" })
    firstName: string;

    @Column("text") lastName: string;
    
    @Column() age: number;

    //OneToOne
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    //OneToMany
    @OneToMany(() => Photo, photo => photo.user)
    @JoinColumn()
    photos: Photo[];

}
