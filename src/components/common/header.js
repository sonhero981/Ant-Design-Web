import React, { useState } from "react";
import { Drawer, Button, Menu, Anchor } from "antd";

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"> </i>
          <a href="https://www.google.com"> Tech </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link href="#home" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#work" title="How it works" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#faq" title="FAQ" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={65}>
              <Link href="#home" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#work" title="How it works" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#faq" title="FAQ" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
