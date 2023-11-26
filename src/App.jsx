import { Container } from "@chakra-ui/react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";


function App() {
  

  return (
    <Container maxW="620px">
     <Header />
     
     <Routes>
      <Route path="/:username" element={<UserPage />}/>
      <Route path="/:username/post/:id" element={<PostPage />}/>
     </Routes>
    </Container>
  )
}

export default App
