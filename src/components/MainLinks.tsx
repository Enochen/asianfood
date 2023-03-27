import { Group, Navbar, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarks,
  IconListDetails,
  IconSearch,
} from "@tabler/icons-react";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
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
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconSearch size="1rem" />,
    color: "blue",
    label: "Query",
  },
  {
    icon: <IconListDetails size="1rem" />,
    color: "teal",
    label: "Results",
  },
  { icon: <IconBookmarks size="1rem" />, color: "violet", label: "Saved" },
];

export default function MainLinks() {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section>
        {data.map((link) => (
          <MainLink {...link} key={link.label} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
