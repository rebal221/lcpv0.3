import { useGeneralConfig } from "@/contexts/GeneralConfigContext";
import { useMainForm } from "@/contexts/MainFormContext";
import { usePublicToken } from "@/contexts/PublicTokenContext";
import { apiFetch } from "@/utils/api";
import { getMainForm } from "@/utils/getFunctions/getMainForm";
import { getPublicToken } from "@/utils/getFunctions/getPublicToken";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function Home(props: any) {
  const { main_project, domain } = useGeneralConfig();
  // const { token } = usePublicToken();
  // const [mainForm, setMainForm] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null); 

  // useEffect(() => {
  //   if (!token) {
  //     setError("Token is missing");
  //     return;
  //   }

  //   const fetchMainForm = async () => {
  //     try {
  //       const data = await getMainForm(token, true);
  //       if (!data) throw new Error("Failed to fetch Main Form");
  //       setMainForm(data);
  //       console.log(data)
  //     } catch (err) {
  //       console.error("Error fetching Main Form:", err);
  //       setError("Failed to load form");
  //     }
  //   };

  //   fetchMainForm();
  // }, [token]); // ✅ `token` should be in the dependency array

  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>{main_project} {domain}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: `${mainForm}` }} /> */}
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const formName = "main_layout";
//     const tableName = "moec";
//     const url = `/lookup/api/v1/openForm?name=${formName}&tableName=${tableName}&view=true`;
//     const publicToken = await getPublicToken();
//     if (!publicToken) throw new Error("Failed to fetch public token");
//     const fetchFunction = apiFetch;

//     const response = await fetchFunction(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${publicToken}`,
//         formId: formName,
//       },
//     });

//     if (!response || !response.data) {
//       throw new Error("Failed to fetch main form");
//     }
//     return {
//       props: { mainForm: response.data },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { main_project: "", domain: "", token: "", formHtml: "" },
//     };
//   }
// };