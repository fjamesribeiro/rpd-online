-- CreateTable
CREATE TABLE "Rpd" (
    "id" SERIAL NOT NULL,
    "situacao" TEXT NOT NULL,
    "pacienteId" INTEGER,

    CONSTRAINT "Rpd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RpdSentimento" (
    "idRpd" INTEGER NOT NULL,
    "idSentimento" INTEGER NOT NULL,

    CONSTRAINT "RpdSentimento_pkey" PRIMARY KEY ("idRpd","idSentimento")
);

-- CreateTable
CREATE TABLE "Sentimento" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Sentimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RpdHumor" (
    "idRpd" INTEGER NOT NULL,
    "idHumor" INTEGER NOT NULL,

    CONSTRAINT "RpdHumor_pkey" PRIMARY KEY ("idHumor","idRpd")
);

-- CreateTable
CREATE TABLE "Humor" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Humor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rpd" ADD CONSTRAINT "Rpd_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdSentimento" ADD CONSTRAINT "RpdSentimento_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdSentimento" ADD CONSTRAINT "RpdSentimento_idSentimento_fkey" FOREIGN KEY ("idSentimento") REFERENCES "Sentimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdHumor" ADD CONSTRAINT "RpdHumor_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdHumor" ADD CONSTRAINT "RpdHumor_idHumor_fkey" FOREIGN KEY ("idHumor") REFERENCES "Humor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
