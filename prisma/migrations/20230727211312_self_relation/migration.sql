/*
  Warnings:

  - You are about to drop the `Paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Psicologo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[psicologoId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `data` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_psicologoId_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_userId_fkey";

-- DropForeignKey
ALTER TABLE "Psicologo" DROP CONSTRAINT "Psicologo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "psicologoId" INTEGER;

-- DropTable
DROP TABLE "Paciente";

-- DropTable
DROP TABLE "Psicologo";

-- CreateIndex
CREATE UNIQUE INDEX "User_psicologoId_key" ON "User"("psicologoId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_psicologoId_fkey" FOREIGN KEY ("psicologoId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
