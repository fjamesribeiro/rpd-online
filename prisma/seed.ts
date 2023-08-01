import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const humores = [{ texto: 'Alegria' }, { texto: 'Tristza' }];

async function main() {
  prisma.humor.createMany({ data: humores });
}

main().then(() => {
  console.log('Seed Finalizado');
});
