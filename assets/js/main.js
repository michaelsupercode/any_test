import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function SwitchButton({ handleSwitch, children }) {
  const [on, setOn] = React.useState(true);

  React.useEffect(() => {
    handleSwitch(on);
  }, [on]);

  return (
    <button
      style={{ "--switch-color": on ? "#7a5ff0" : "#f4a26c" }}
      className="SwitchButton"
      onClick={() => setOn((on) => !on)}
      >
      {children}
    </button>
  );
}
function App() {
  const [dark, setDark] = React.useState(true);
  return (
    <main>
      <ul className={`BackgroundLight ${dark ? "degage" : ""}`}>
        <li></li>
        <li></li>
      </ul>
      <div className="Container">
        <h1>Hello World !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique, inventore. Sunt doloribus laborum similique non
          tenetur a, libero incidunt dolore animi quisquam beatae, nam,
          facere quaerat rerum sequi quibusdam odit!
        </p>
        <SwitchButton handleSwitch={setDark}>
          {dark ? "Set light" : "Set dark"}
        </SwitchButton>
      </div>
      <div
        style={{
          position: "fixed",
            bottom: "20px",
              right: "20px",
                fontSize: "16px",
                  display: "flex",
                    alignItems: "center",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
        }}
        >
        <label style={{ fontWeight: "bold", marginRight: 10 }}>
          Video on
        </label>
        <a
          target="__blank"
          href="https://www.tiktok.com/@c.eairen/video/7425163994698108193"
          style={{
            marginRight: 10,
              backgroundColor: "#7a5ff0",
                color: "white",
                  padding: "5px 10px",
                    borderRadius: "30px",
                      textDecoration: "none",
                        fontWeight: "bold",
          }}
          >
          TikTok
        </a>
        <a
          target="__blank" href="https://www.youtube.com/shorts/SwZ1LgTgIVU"
          style={{
            backgroundColor: "#7a5ff0",
              color: "white",
                padding: "5px 10px",
                  borderRadius: "30px",
                    textDecoration: "none",
                      fontWeight: "bold",
          }}
          >
          YouTube
        </a>
      </div>
    </main>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
