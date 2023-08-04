import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const humores = [
  { texto: 'Humor mais Positivo' },
  { texto: 'Humor Positivo' },
  { texto: 'Humor mais Positivo' },
  { texto: 'Nem Positivo, nem negativo' },
  { texto: 'Humor negativo' },
  { texto: 'Humor mais negativo' },
];

const sentimentos = [
  { texto: 'Medo' },
  { texto: 'Triste' },
  { texto: 'Ansioso' },
  { texto: 'Raiva' },
  { texto: 'Enojado' },
  { texto: 'Surpreso' },
  { texto: 'Envergonhado' },
  { texto: 'Constrangido' },
  { texto: 'Apático' },
  { texto: 'Inseguro' },
  { texto: 'Assustado' },
  { texto: 'Frustrado' },
  { texto: 'Deprimido' },
  { texto: 'Irritado' },
  { texto: 'Magoado' },
  { texto: 'Culpado' },
  { texto: 'Humilhado' },
];

async function main() {
  sentimentos.map(async ({ texto }) => {
    await prisma.humor.upsert({
      create: { texto },
      where: { texto: texto },
      update: undefined,
    });
  });

  // await prisma.humor.createMany({ data: humores });
  // await prisma.sentimento.createMany({ data: sentimentos });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.error(new Date());
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
