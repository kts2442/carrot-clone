# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare.

# About 6.5 Push to PlanetScale

230606

## Referential integrity (참조 무결성)

- Vitness는 데이터의 Scaling을 위해서(데이터를 여러군데 저장) foreign key를 지원하지 않음
- 따라서 prisma를 통해서 참조 무결성 체크

## Schema push to DB

- npx prisma db push
