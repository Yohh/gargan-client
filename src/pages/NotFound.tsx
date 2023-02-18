import React from "react";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation("translation");

  return (
    <section className="notFound flex justify-center items-center h-screen w-screen">
      <span className="font-bold text-xl">{`${t("somethingWentWrong")}, ${t(
        "pageNotFound"
      )}`}</span>
    </section>
  );
};
