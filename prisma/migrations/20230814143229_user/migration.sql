-- AlterTable
ALTER TABLE "User" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "data" DROP NOT NULL,
ALTER COLUMN "data" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "sobrenome" DROP NOT NULL,
ALTER COLUMN "urlFoto" DROP NOT NULL;