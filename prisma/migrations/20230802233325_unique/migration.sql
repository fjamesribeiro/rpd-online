/*
  Warnings:

  - A unique constraint covering the columns `[texto]` on the table `Humor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[texto]` on the table `Sentimento` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Humor_texto_key" ON "Humor"("texto");

-- CreateIndex
CREATE UNIQUE INDEX "Sentimento_texto_key" ON "Sentimento"("texto");
