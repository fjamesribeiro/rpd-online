/*
  Warnings:

  - Made the column `psicologoId` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_psicologoId_fkey";

-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "psicologoId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_psicologoId_fkey" FOREIGN KEY ("psicologoId") REFERENCES "Psicologo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
