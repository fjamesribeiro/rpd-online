/*
  Warnings:

  - Made the column `pacienteId` on table `Rpd` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Rpd" DROP CONSTRAINT "Rpd_pacienteId_fkey";

-- AlterTable
ALTER TABLE "Rpd" ALTER COLUMN "pacienteId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Rpd" ADD CONSTRAINT "Rpd_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
