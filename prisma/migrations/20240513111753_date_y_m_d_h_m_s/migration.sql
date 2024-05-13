-- CreateTable
CREATE TABLE "TapupCards" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "isActivated" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TapupCards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TapupCards" ADD CONSTRAINT "TapupCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
