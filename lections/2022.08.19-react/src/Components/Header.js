import React from "react";

const Header = () => {
    return (
        <header>
            <h1
                style={{
                    fontSize: "6rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#ececec",
                    textTransform: "lowercase",
                    textAlign: "center",
                }}>
                Todos:{" "}
            </h1>
        </header>
    );
};
export default Header;
