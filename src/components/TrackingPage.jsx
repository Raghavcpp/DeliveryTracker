import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TrackingAnimation from "./TrackingAnimation";
import PackageTable from "./PackageTable";
import NotFound from "./NotFound";
import Header from "./Header";
import { MDBSpinner } from "mdb-react-ui-kit";

function TrackingPage() {
  const { trackingId } = useParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${trackingId}`)
      .then((res) => setData(res.data))
      .catch(() => setNotFound(true));
  }, [trackingId]);

  if (notFound) return <NotFound />;
  if (!data) return <MDBSpinner role='status'><span className='visually-hidden'>Loading...</span></MDBSpinner>;

  return (
    <>
      <Header />
      <div className="flex-1 space-y-12  sm:px-6 lg:px-16 py-10">
        <TrackingAnimation data={data} />
        <PackageTable data={data} />
      </div>
      </>
  );
}

export default TrackingPage;
