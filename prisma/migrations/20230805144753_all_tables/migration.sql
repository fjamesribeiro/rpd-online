/*
  Warnings:

  - Added the required column `comportamento` to the `Rpd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pensamentoId` to the `Rpd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rpd" ADD COLUMN     "comportamento" TEXT NOT NULL,
ADD COLUMN     "pensamentoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Pensamento" (
    "id" SERIAL NOT NULL,
    "idRpd" INTEGER NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Pensamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RpdFisiologia" (
    "idRpd" INTEGER NOT NULL,
    "idFisiologia" INTEGER NOT NULL,

    CONSTRAINT "RpdFisiologia_pkey" PRIMARY KEY ("idFisiologia","idRpd")
);

-- CreateTable
CREATE TABLE "Fisiologia" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Fisiologia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fisiologia_texto_key" ON "Fisiologia"("texto");

-- AddForeignKey
ALTER TABLE "Pensamento" ADD CONSTRAINT "Pensamento_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdFisiologia" ADD CONSTRAINT "RpdFisiologia_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdFisiologia" ADD CONSTRAINT "RpdFisiologia_idFisiologia_fkey" FOREIGN KEY ("idFisiologia") REFERENCES "Fisiologia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
