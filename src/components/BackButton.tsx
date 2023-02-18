import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();

  return (
    <button
      className="rounded py-1 px-2 bg-stone-600 hover:bg-neutral-200 text-neutral-200 hover:text-gray-800"
      onClick={() => navigate(-1)}
    >
      {t("back")}
    </button>
  );
};
