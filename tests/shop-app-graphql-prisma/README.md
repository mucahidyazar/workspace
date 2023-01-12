Source: https://medium.com/@aenesgur/nodejs-projesinde-graphql-ve-prisman%C4%B1n-kullan%C4%B1m%C4%B1-7bb6003d95a3
Author: Enes Gür
Coder: Mucahid Yazar

What is Graphql?
GraphQL basit anlamda veri çekme, sorgulama, ekleme, güncelleme gibi işlemleri yapabileceğimiz bir sorgulama teknolojisidir. Rest API’a kısayla en büyük avantajı client tarafının ihtiyaç duyduğu verilere başka veri almaksızın doğrudan ulaşmasını sağlamasıdır. Bu sayede client tarafı gereksiz verilerle boğuşmamış olur ve trafik konusunda avantaj elde ederiz.

What is Prisma?
Prisma, GraphQL’in veritabanınızla etkileşimde bulunmak için kullanabileceği bir istemci(client) sağlar. Aslında bir ORM gibi düşünebiliriz fakat ORM’lerle aynı hedefleri paylaşmasına rağmen temelde farklı bir yaklaşım benimser. Prisma’nın temel amacı, uygulama geliştiricileri için veritabanları ile çalışmayı kolaylaştırmaktır. ORM’ler, veritabanındaki tabloları, programlama dilinizdeki sınıflarla eşleyen kütüphanelerdir. Prisma ise bir veritabanı toolkit’idir. Prisma MySQL, MongoDB, PostgreSQL gibi birçok popüler veritabanıyla uyumlu bir şekilde çalışmaktadır.

Why Prisma?
Prisma, veri erişimi, migrations ve veri görseli yönetimi için kullanılan güçlü bir veritabanı aracıdır. Geleneksel ORM’lerin yerini alır ve karmaşık veritabanı iş akışlarından kaynaklanan sorunları ortadan kaldırır.
Tercih ettiğiniz veritabanıyla otomatik entegrasyon sağlar.
Veri tabanındaki verileri ve ilişkilerini gösteren güçlü bir panel sağlar.
