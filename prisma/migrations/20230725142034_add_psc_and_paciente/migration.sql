/*
  Warnings:

  - You are about to drop the column `email` on the `Psicologo` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Psicologo` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Psicologo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Psicologo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Psicologo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Psicologo_email_key";

-- AlterTable
ALTER TABLE "Psicologo" DROP COLUMN "email",
DROP COLUMN "nome",
DROP COLUMN "password",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_userId_key" ON "Paciente"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Psicologo_userId_key" ON "Psicologo"("userId");

-- AddForeignKey
ALTER TABLE "Psicologo" ADD CONSTRAINT "Psicologo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
