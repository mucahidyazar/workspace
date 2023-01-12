tslint
tslint-config-prettier
typescript

Bu 3 paketi yukle ilk once vedaha sorna tslint.json dosyasinda asagidaki kismi bu sekilde ayarla

    "extends": [
        "tslint:latest",
        "tslint-config-prettier"
    ],

---------------------------

tsconfig.json dosyasini olusturup asagidaki kodlari yapistir icine

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": ["dom", "es6", "es2017", "esnext.asynciterable"],
    "sourceMap": true,
    "outDir": "./dist",
    "moduleResolution": "node",

    "removeComments": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  "exclude": ["node_modules"],
  "include": ["./src/**/*.tsx", "./src/**/*.ts"]
}

=> yarn add -D ts-node
package.json script => "start": "nodemon --exec ts-node src/index.ts"



///
yarn add pg typeorm reflect-metadata
pg => Postgress icin database secenegi typeorm sayfasinda diger databaseler icin olanlara bakabilirsiniz.

yarn add @types/node
node ile calisacagimizdan oturu bu gerekli



///
Daha sonra typeormu global olarak yukluyoruz
npm i typeorm -g
 ve projemizle initrializini sagliyoruz
typeorm init --database pg



//ORNEK GRAPHORM ENTITY
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity("Mucahid")
export class User {

    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text", unique: true })
    email: string;

    @Column({ type: "bool", default: false })
    confirmed: boolean;

    @Column({ type: "varchar", length: "230" })
    firstName: string;

    @Column("text") lastName: string;
    
    @Column() age: number;

}
