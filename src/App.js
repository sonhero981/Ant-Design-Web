import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Button, Layout, Menu, Breadcrumb } from "antd";
import AppHeader from "./components/common/header";
import AppHome from "./components/view/home";
import AppFooter from "./components/common/footer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
