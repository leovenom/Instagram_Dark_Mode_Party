import React from "react";
import GeneralConditions20200724 from "./20200724";
import GeneralConditions20201211 from "./20201211";

const Docs = {
  last: {
    component: (currentVersion, oldVersions) => (
      <GeneralConditions20201211
        currentVersion={currentVersion}
        oldVersions={oldVersions}
      />
    ),
    label: "auto",
    id: "20201211",
    updatedAt: "11/12/2020",
    termsOfUse: {
      id: "20201222",
    },
    dataPolicy: {
      id: "20201222",
    },
  },
  old: [
    {
      component: (currentVersion, oldVersions) => (
        <GeneralConditions20200724
          currentVersion={currentVersion}
          oldVersions={oldVersions}
        />
      ),
      label: "auto",
      id: "20200724",
      updatedAt: "24/07/2020",
      termsOfUse: {
        id: "20190112",
      },
      dataPolicy: {
        id: "20181217",
      },
    },
  ],
};

export default Docs;
