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
} from "@mantine/core";
import { useState } from "react";
import ingredients from "@/data/ingredients.json";

export default function Home() {
  // Stepper Control
  const [active, setActive] = useState(0);
  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
  };

  // Ingredients MultiSelect Control
  const [pantry, setPantry] = useState<string[]>([]);

  return (
    <Container p="lg" size="md">
      <Center h={100}>
        <Title order={1}>Asian Food</Title>
      </Center>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step
          label="Pantry"
          description="Ingredients"
          allowStepSelect={active != 2}
        >
          <MultiSelect
            value={pantry}
            onChange={setPantry}
            data={ingredients}
            label="What's in your pantry?"
            placeholder="recipes won't be an exact match"
            limit={20}
            maxDropdownHeight={160}
            searchable
            creatable
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
            <Button onClick={() => handleStepChange(active + 1)}>Next</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step
          label="Second Step Idk"
          description="Preferences"
          allowStepSelect={active != 2}
        >
          <Text>
            Your pantry includes:{" "}
            {pantry.length ? pantry.join(", ") : "nothing..."}{" "}
          </Text>
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
        <Stepper.Step label="Discover" description="Find Recipes!">
          Here would be all the recipes...
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
    </Container>
  );
}
