import { useNavigate } from "react-router-dom";
import { editSteps } from "../edit/edit.steps";

export function SidebarContentNav() {
  const navigate = useNavigate();

  const navItems = editSteps.map((it) => {
    return (
      <div key={it.path} onClick={() => navigate(it.path)}>
        {it.linkLabel}
      </div>
    );
  });

  return <div>{navItems}</div>;
}
