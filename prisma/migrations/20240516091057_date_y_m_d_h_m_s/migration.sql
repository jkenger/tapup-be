/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `TapupCards` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "TapupCards" DROP CONSTRAINT "TapupCards_userId_fkey";

-- AlterTable
ALTER TABLE "TapupCards" ALTER COLUMN "userId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TapupCards_code_key" ON "TapupCards"("code");

-- AddForeignKey
ALTER TABLE "TapupCards" ADD CONSTRAINT "TapupCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
