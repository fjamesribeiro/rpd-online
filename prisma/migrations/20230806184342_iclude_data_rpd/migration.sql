/*
  Warnings:

  - Added the required column `data` to the `Rpd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rpd" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;
