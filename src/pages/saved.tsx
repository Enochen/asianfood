import MainLinks from "@/components/MainLinks";
import { Title, AppShell, Header, Navbar, Text } from "@mantine/core";

export default function Saved() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={70} px="lg" py="md">
          <Title order={2}>Asian Food Rec</Title>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
