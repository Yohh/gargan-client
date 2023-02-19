import React from "react";
import { useTranslation } from "react-i18next";
import { BackButton } from "../components/BackButton";

export const NotFound = () => {
  const { t } = useTranslation("translation");

  return (
    <section className="notFound flex flex-col justify-center items-center h-screen w-screen">
      <span className="mb-3 font-bold text-xl text-gray-800">
        {t("somethingWentWrong")}
      </span>
      <span className="mb-5 font-bold text-xl text-gray-800">
        {t("pageNotFound")}
      </span>
      <BackButton />
    </section>
  );
};
