import { useRouter } from "next/router";
import AskForRefund from "landingPages/askForRefund";

const Landing = () => {
  const router = useRouter();
  const { embedded, product } = router.query;
  const isEmbedded = embedded === "true";

  return <AskForRefund product={product} isEmbedded={isEmbedded} />;
};

export default Landing;
