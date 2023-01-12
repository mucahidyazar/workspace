export type Resolver = (parent: any, args: any, context: any, info: any) => any;

//aslinda buradaki ilk [key: string] RESOLVER'daki Query - mutation - Subscription gibi degerlerdir.
//2. [key: string] ise icinde typeDefslere karsilik gelen fonksiyonlardir. Ve bu fonksiyonlara yukaridaki TYPE imizi verecegiz.
export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver
  }
}