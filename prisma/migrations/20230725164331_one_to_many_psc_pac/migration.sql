-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "psicologoId" INTEGER;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_psicologoId_fkey" FOREIGN KEY ("psicologoId") REFERENCES "Psicologo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
