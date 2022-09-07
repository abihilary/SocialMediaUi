import { Box, Stack } from "@mui/material";
import Add from "./componant/Add";
import Feed from "./componant/Feed";
import Nav from "./componant/Nav";
import RightBar from "./componant/RightBar";
import SideBar from "./componant/SideBar";
import footer from "./componant/footer";
import Footer from "./componant/footer";
import SideBarNew from "./componant/SideBarNew";
import Tab from "./componant/Tab";
import SubNav from "./componant/SubNav";






function App() {






  return (
    <Box className="App">
      <Nav/>
      <SubNav/>
      
      <Stack direction="row" spacing ={2} justifyContent="space-between">
      <SideBarNew />
      <Feed />
      <RightBar />
      </Stack>
      
      <Footer />
      
    </Box>
  );
}

export default App;
