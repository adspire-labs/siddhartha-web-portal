/*
  Warnings:

  - You are about to drop the column `specialization` on the `Faculty` table. All the data in the column will be lost.
  - Added the required column `specializations` to the `Faculty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Faculty" DROP COLUMN "specialization",
ADD COLUMN     "specializations" TEXT NOT NULL;
