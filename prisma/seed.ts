import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const humores = [
  { id: 1, texto: 'Humor mais Positivo' },
  { id: 2, texto: 'Humor Positivo' },
  { id: 3, texto: 'Nem Positivo, nem negativo' },
  { id: 4, texto: 'Humor negativo' },
  { id: 5, texto: 'Humor mais negativo' },
];

const fisiologia = [
  { texto: 'Falta de ar' },
  { texto: 'Tontura' },
  { texto: 'Sudorese' },
  { texto: 'Tremores' },
  { texto: 'Agitação' },
  { texto: 'Nervosismo' },
  { texto: 'Palpitações' },
  { texto: 'Dor no peito' },
  { texto: 'Sensação de paz' },
  { texto: 'Cansaço' },
  { texto: 'Desrealização' },
  { texto: 'Ruborização' },
  { texto: 'Tensão muscular' },
  { texto: 'Frio na barriga' },
];

const sentimentos = [
  { id: 20, texto: 'Alegre' }, //20
  { id: 21, texto: 'Amoroso' }, //21
  { id: 22, texto: 'Feliz' }, //22
  { id: 23, texto: 'Otimista' }, //23
  { id: 24, texto: 'Calmo' }, //24
  { id: 25, texto: 'Leve' }, //25
  { id: 26, texto: 'Especial' }, //26
  { id: 27, texto: 'Orgulhoso' }, //27
  { id: 28, texto: 'Excitado' }, //28

  { id: 29, texto: 'Ansioso' }, //29
  { id: 30, texto: 'Surpreso' }, //30
  { id: 31, texto: 'Apático' }, //31

  { id: 32, texto: 'Medo' }, //32
  { id: 33, texto: 'Triste' }, //33
  { id: 34, texto: 'Raiva' }, //34
  { id: 35, texto: 'Enojado' }, //35
  { id: 36, texto: 'Envergonhado' }, //36
  { id: 37, texto: 'Constrangido' }, //37
  { id: 38, texto: 'Inseguro' }, //38
  { id: 39, texto: 'Assustado' }, //39
  { id: 40, texto: 'Frustrado' }, //40
  { id: 41, texto: 'Deprimido' }, //41
  { id: 42, texto: 'Irritado' }, //42
  { id: 43, texto: 'Magoado' }, //43
  { id: 44, texto: 'Culpado' }, //44
  { id: 45, texto: 'Humilhado' }, //45
];

const humorsentimentos12 = [
  { idHumor: 1, idSentimento: 29 },
  { idHumor: 1, idSentimento: 20 },
  { idHumor: 1, idSentimento: 30 },
  { idHumor: 1, idSentimento: 21 },
  { idHumor: 1, idSentimento: 22 },
  { idHumor: 1, idSentimento: 23 },
  { idHumor: 1, idSentimento: 24 },
  { idHumor: 1, idSentimento: 25 },
  { idHumor: 1, idSentimento: 26 },
  { idHumor: 1, idSentimento: 27 },
  { idHumor: 1, idSentimento: 28 },
  { idHumor: 1, idSentimento: 37 },
  { idHumor: 1, idSentimento: 31 },

  { idHumor: 2, idSentimento: 29 },
  { idHumor: 2, idSentimento: 20 },
  { idHumor: 2, idSentimento: 30 },
  { idHumor: 2, idSentimento: 21 },
  { idHumor: 2, idSentimento: 22 },
  { idHumor: 2, idSentimento: 23 },
  { idHumor: 2, idSentimento: 24 },
  { idHumor: 2, idSentimento: 25 },
  { idHumor: 2, idSentimento: 26 },
  { idHumor: 2, idSentimento: 27 },
  { idHumor: 2, idSentimento: 28 },
  { idHumor: 2, idSentimento: 37 },
  { idHumor: 2, idSentimento: 31 },
];

const humorsentimentos345 = [
  { idHumor: 3, idSentimento: 32 },
  { idHumor: 3, idSentimento: 29 },
  { idHumor: 3, idSentimento: 35 },
  { idHumor: 3, idSentimento: 30 },
  { idHumor: 3, idSentimento: 24 },
  { idHumor: 3, idSentimento: 36 },
  { idHumor: 3, idSentimento: 37 },
  { idHumor: 3, idSentimento: 31 },
  { idHumor: 3, idSentimento: 38 },
  { idHumor: 3, idSentimento: 42 },

  { idHumor: 4, idSentimento: 32 },
  { idHumor: 4, idSentimento: 33 },
  { idHumor: 4, idSentimento: 29 },
  { idHumor: 4, idSentimento: 34 },
  { idHumor: 4, idSentimento: 35 },
  { idHumor: 4, idSentimento: 30 },
  { idHumor: 4, idSentimento: 36 },
  { idHumor: 4, idSentimento: 37 },
  { idHumor: 4, idSentimento: 31 },
  { idHumor: 4, idSentimento: 38 },
  { idHumor: 4, idSentimento: 39 },
  { idHumor: 4, idSentimento: 40 },
  { idHumor: 4, idSentimento: 41 },
  { idHumor: 4, idSentimento: 43 },
  { idHumor: 4, idSentimento: 44 },
  { idHumor: 4, idSentimento: 45 },

  { idHumor: 5, idSentimento: 32 },
  { idHumor: 5, idSentimento: 33 },
  { idHumor: 5, idSentimento: 29 },
  { idHumor: 5, idSentimento: 34 },
  { idHumor: 5, idSentimento: 35 },
  { idHumor: 5, idSentimento: 30 },
  { idHumor: 5, idSentimento: 36 },
  { idHumor: 5, idSentimento: 37 },
  { idHumor: 5, idSentimento: 31 },
  { idHumor: 5, idSentimento: 38 },
  { idHumor: 5, idSentimento: 39 },
  { idHumor: 5, idSentimento: 40 },
  { idHumor: 5, idSentimento: 41 },
  { idHumor: 5, idSentimento: 43 },
  { idHumor: 5, idSentimento: 44 },
  { idHumor: 5, idSentimento: 45 },
];

async function main() {
  // await prisma.humor.createMany({ data: humores });
  // await prisma.fisiologia.createMany({ data: fisiologia });
  // await prisma.sentimento.createMany({ data: sentimentos });
  // await prisma.humorSentimento.createMany({ data: humorsentimentos12 });
  // await prisma.humorSentimento.createMany({ data: humorsentimentos345 });
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
