import {
  Button,
  Center,
  Container,
  Group,
  MultiSelect,
  Stepper,
  Title,
  AppShell,
  Header,
  Slider,
  TextInput,
  Text,
  Grid,
  SimpleGrid,
} from "@mantine/core";
import { useEffect, useState } from "react";
import ingredients from "@/data/ingredients.json";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  // Stepper
  const [active, setActive] = useState(0);
  const handleStepChange = (nextStep: number) => {
    if (nextStep > 3 || nextStep < 0) return;
    setActive(nextStep);
  };

  // Query
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState<string[]>([]);
  console.log(query);

  // Ingredients MultiSelect
  const [pantry, setPantry] = useState<string[]>([]);

  // Misc Slider
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    // make request to a server and update recipes
  }, [query, sliderValue]);

  return (
    <AppShell
      padding="md"
      header={
        <Header height={70} px="lg" py="md">
          <Center>
            <Title order={2}>Asian Food Rec</Title>
          </Center>
        </Header>
      }
      navbar={
        // <Navbar width={{ base: 300 }} height={500} p="xs">
        //   <Navbar.Section mt="xs">
        //     <MainLinks />
        //   </Navbar.Section>
        // </Navbar>
        <></>
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
      <Container p="lg" size="sm">
        {/* <Center h={100}>
          <Title order={1}>Asian Food</Title>
        </Center> */}
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Query" description="">
            {/* <Text>
              Your pantry includes:{" "}
              {pantry.length ? pantry.join(", ") : "nothing..."}{" "}
            </Text> */}
            <TextInput
              value={queryInput}
              onChange={(event) => setQueryInput(event.currentTarget.value)}
              label="What's on your mind?"
              placeholder="chicken, spicy, stir fry, with rice, high fiber"
              withAsterisk
            />
            {/* <MultiSelect
              data={[]}
              onChange={setQuery}
              label="What's on your mind?"
              placeholder="chicken, spicy, stir fry, with rice, high fiber"
              searchable
              creatable
              getCreateLabel={(item) => `${item}`}
              onCreate={(item) => {
                setQuery((current) => [...current, item]);
                return item;
              }}
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
            /> */}
            <Group position="center" mt="xl">
              <Button
                disabled
                variant="default"
                onClick={() => handleStepChange(active - 1)}
              >
                Back
              </Button>
              <Button
                disabled={!queryInput}
                onClick={() => handleStepChange(active + 1)}
              >
                Next
              </Button>
            </Group>
          </Stepper.Step>
          <Stepper.Step label="Pantry">
            <MultiSelect
              value={pantry}
              onChange={setPantry}
              data={ingredients}
              label="What's in your pantry?"
              placeholder="no need for exact matches!"
              limit={20}
              maxDropdownHeight={160}
              searchable
              creatable
              onCreate={(newItem) => {
                setPantry((current) => [...current, newItem]);
                return newItem;
              }}
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
            />
            <Group position="center" mt="xl">
              <Button
                variant="default"
                onClick={() => handleStepChange(active - 1)}
              >
                Back
              </Button>
              <Button onClick={() => handleStepChange(active + 1)}>
                {pantry.length ? "Next" : "Skip"}
              </Button>
            </Group>
          </Stepper.Step>
          <Stepper.Step label="Configuration" description="">
            <Text>To Be Implemented</Text>
            <Slider label={null} onChangeEnd={setSliderValue} />
            <Group position="center" mt="xl">
              <Button
                variant="default"
                onClick={() => handleStepChange(active - 1)}
              >
                Back
              </Button>
              <Button onClick={() => handleStepChange(active + 1)}>
                Confirm
              </Button>
            </Group>
          </Stepper.Step>
          <Stepper.Completed>Enjoy!</Stepper.Completed>
        </Stepper>
      </Container>
      <Container p="lg" size="lg">
        <Center>
          <Title order={2}>Recipes</Title>
        </Center>
        <SimpleGrid cols={3} mt="md">
          <RecipeCard
            imageSrc="https://thewoksoflife.com/wp-content/uploads/2019/06/mapo-tofu-10.jpg"
            name="Mapo Tofu"
          />
          <RecipeCard
            imageSrc="https://thewoksoflife.com/wp-content/uploads/2019/06/mapo-tofu-10.jpg"
            name="Mapo Tofu"
          />
          <RecipeCard
            imageSrc="https://thewoksoflife.com/wp-content/uploads/2019/06/mapo-tofu-10.jpg"
            name="Mapo Tofu"
          />
        </SimpleGrid>
      </Container>
    </AppShell>
  );
}
