import React from "react";

const ZaloPopup = () => {
  return (
    <a
      href="https://zalo.me/0387419012" // thay số điện thoại của bạn
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#0068FF",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
        alt="Zalo"
        style={{ width: "35px", height: "35px" }}
      />
    </a>
  );
};

export default ZaloPopup;
