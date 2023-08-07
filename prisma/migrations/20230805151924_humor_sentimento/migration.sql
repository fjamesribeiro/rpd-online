-- CreateTable
CREATE TABLE "HumorSentimento" (
    "idHumor" INTEGER NOT NULL,
    "idSentimento" INTEGER NOT NULL,

    CONSTRAINT "HumorSentimento_pkey" PRIMARY KEY ("idHumor","idSentimento")
);

-- AddForeignKey
ALTER TABLE "HumorSentimento" ADD CONSTRAINT "HumorSentimento_idHumor_fkey" FOREIGN KEY ("idHumor") REFERENCES "Humor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumorSentimento" ADD CONSTRAINT "HumorSentimento_idSentimento_fkey" FOREIGN KEY ("idSentimento") REFERENCES "Sentimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
