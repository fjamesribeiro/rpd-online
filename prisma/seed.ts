import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const humores = [
  { texto: 'Humor mais Positivo' },
  { texto: 'Humor Positivo' },
  { texto: 'Nem Positivo, nem negativo' },
  { texto: 'Humor negativo' },
  { texto: 'Humor mais negativo' },
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

]
const sentimentos = [

  { texto: 'Alegre' },//20
  { texto: 'Amoroso' },//21
  { texto: 'Feliz' },//22
  { texto: 'Otimista' }, //23
  { texto: 'Calmo' }, //24
  { texto: 'Leve' },//25
  { texto: 'Especial' }, //26
  { texto: 'Orgulhoso' },//27
  { texto: 'Excitado' },//28

  { texto: 'Ansioso' }, //29
  { texto: 'Surpreso' }, //30
  { texto: 'Apático' }, //31

  { texto: 'Medo' }, //32
  { texto: 'Triste' }, //33
  { texto: 'Raiva' }, //34
  { texto: 'Enojado' }, //35
  { texto: 'Envergonhado' }, //36 
  { texto: 'Constrangido' }, //37
  { texto: 'Inseguro' }, //38
  { texto: 'Assustado' }, //39
  { texto: 'Frustrado' }, //40
  { texto: 'Deprimido' }, //41
  { texto: 'Irritado' }, //42
  { texto: 'Magoado' }, //43
  { texto: 'Culpado' }, //44
  { texto: 'Humilhado' }, //45
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

]

async function main() {
  // await prisma.humor.createMany({ data: humores });
  // await prisma.sentimento.createMany({ data: sentimentos });
  // await prisma.humorSentimento.createMany({ data: humorsentimentos345 })
  // await prisma.fisiologia.createMany({ data: fisiologia })

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
