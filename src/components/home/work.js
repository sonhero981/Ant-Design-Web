import { formatCountdown } from "antd/lib/statistic/utils";
import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";

function AppWork() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="work" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>
            Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
          </p>
        </div>
      </div>
      <div className="contentHolder">
        <Button onClick={showModal}>
          <i className="fas fa-play"></i>
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/DxNu1tVksqM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}
export default AppWork;
