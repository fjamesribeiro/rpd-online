/*
  Warnings:

  - You are about to drop the `RpdHumor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `humorId` to the `Rpd` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HumorSentimento" DROP CONSTRAINT "HumorSentimento_idHumor_fkey";

-- DropForeignKey
ALTER TABLE "HumorSentimento" DROP CONSTRAINT "HumorSentimento_idSentimento_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_psicologoId_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pensamento" DROP CONSTRAINT "Pensamento_idRpd_fkey";

-- DropForeignKey
ALTER TABLE "Psicologo" DROP CONSTRAINT "Psicologo_userid_fkey";

-- DropForeignKey
ALTER TABLE "Rpd" DROP CONSTRAINT "Rpd_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "RpdFisiologia" DROP CONSTRAINT "RpdFisiologia_idFisiologia_fkey";

-- DropForeignKey
ALTER TABLE "RpdFisiologia" DROP CONSTRAINT "RpdFisiologia_idRpd_fkey";

-- DropForeignKey
ALTER TABLE "RpdHumor" DROP CONSTRAINT "RpdHumor_idHumor_fkey";

-- DropForeignKey
ALTER TABLE "RpdHumor" DROP CONSTRAINT "RpdHumor_idRpd_fkey";

-- DropForeignKey
ALTER TABLE "RpdSentimento" DROP CONSTRAINT "RpdSentimento_idRpd_fkey";

-- DropForeignKey
ALTER TABLE "RpdSentimento" DROP CONSTRAINT "RpdSentimento_idSentimento_fkey";

-- AlterTable
ALTER TABLE "Rpd" ADD COLUMN     "humorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "RpdHumor";

-- AddForeignKey
ALTER TABLE "Psicologo" ADD CONSTRAINT "Psicologo_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_psicologoId_fkey" FOREIGN KEY ("psicologoId") REFERENCES "Psicologo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rpd" ADD CONSTRAINT "Rpd_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rpd" ADD CONSTRAINT "Rpd_humorId_fkey" FOREIGN KEY ("humorId") REFERENCES "Humor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pensamento" ADD CONSTRAINT "Pensamento_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdSentimento" ADD CONSTRAINT "RpdSentimento_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdSentimento" ADD CONSTRAINT "RpdSentimento_idSentimento_fkey" FOREIGN KEY ("idSentimento") REFERENCES "Sentimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumorSentimento" ADD CONSTRAINT "HumorSentimento_idHumor_fkey" FOREIGN KEY ("idHumor") REFERENCES "Humor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumorSentimento" ADD CONSTRAINT "HumorSentimento_idSentimento_fkey" FOREIGN KEY ("idSentimento") REFERENCES "Sentimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdFisiologia" ADD CONSTRAINT "RpdFisiologia_idRpd_fkey" FOREIGN KEY ("idRpd") REFERENCES "Rpd"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RpdFisiologia" ADD CONSTRAINT "RpdFisiologia_idFisiologia_fkey" FOREIGN KEY ("idFisiologia") REFERENCES "Fisiologia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
