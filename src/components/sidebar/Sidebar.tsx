import { SidebarContent } from "./SidebarContent";

export function Sidebar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "200px",
          height: 300,
          background: "white",
        }}
      >
        <SidebarContent />
      </div>
    </div>
  );
}
