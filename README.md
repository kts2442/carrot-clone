# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare.

# About 6.4 Connection to PlanetScale

230606

## PlanetScale setup

- brew를 통해서 pscale CLI, mysql client 설치

## Database create and connect

- pscale database create carrot-market --region ap-northeast
- pscale connect carrot-market
- .env 파일에 source uri 수정
