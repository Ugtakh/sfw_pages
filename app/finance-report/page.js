import Layout from "@/components/layout/Layout";

import FinanceTop from "./FinanceTop";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Манай хамт олон">
        <div style={{ marginTop: 30 }}>
          <FinanceTop />
        </div>
      </Layout>
    </>
  );
}
