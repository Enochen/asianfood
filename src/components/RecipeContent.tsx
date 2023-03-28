import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Image,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";

interface Props {
  name: string;
  description: string;
  minutes: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
}

export default function RecipeContent({
  name,
  description,
  minutes,
  ingredients,
  steps,
  tags,
}: Props) {
  return (
    <Container mb="md">
      <Box>
        <Center>
          <Title order={3}>{name}</Title>
        </Center>
        <Center>
          <Text>{minutes} Minutes</Text>
        </Center>
        <Center>
          <Group mt="xs">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </Group>
        </Center>
      </Box>
      <Stack>
        <Title order={3}>Description</Title>
        <Text>{description}</Text>
        <Title order={3}>Ingredients</Title>
        <List>
          {ingredients.map((ingredient, i) => {
            return <List.Item key={i}>{ingredient}</List.Item>;
          })}
        </List>
        <Title order={3}>Steps</Title>
        <List>
          {steps.map((step, i) => {
            return <List.Item key={i}>{step}</List.Item>;
          })}
        </List>
      </Stack>
    </Container>
  );
}
