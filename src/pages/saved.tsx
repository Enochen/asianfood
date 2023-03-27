import {
  Button,
  Center,
  Container,
  Group,
  MultiSelect,
  Stepper,
  Title,
  Text,
  Checkbox,
  Space,
  AppShell,
  Header,
  Navbar,
} from "@mantine/core";
import { useState } from "react";
import ingredients from "@/data/ingredients.json";

export default function Home() {
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
          {/* Navbar content */}
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
