import { useNavigate } from "react-router-dom";
import { editSteps } from "../edit/edit.steps";
import { UnstyledButton } from "@mantine/core";

export function SidebarContentNav() {
  const navigate = useNavigate();

  const navItems = editSteps.map((it) => {
    return (
      <UnstyledButton
        key={it.path}
        onClick={() => navigate(it.path)}
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        {it.linkLabel}
      </UnstyledButton>
    );
  });

  return (
    <div>
      <div>Edit Profile</div>
      {navItems}
    </div>
  );
}
