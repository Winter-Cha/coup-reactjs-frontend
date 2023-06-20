// make index.tsx the default export
import { NextPage } from "next";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Home: NextPage = () => {
  return (
    <Box display={"block"}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI - Next.js example in TypeScript
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Box>
  );
};

export default Home;
