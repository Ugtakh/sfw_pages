import Layout from "@/components/layout/Layout";
import Members from "./members";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        {/* <div> */}
        <Members />
        {/* </div> */}
      </Layout>
    </>
  );
}
