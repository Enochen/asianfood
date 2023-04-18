import { formatName } from "@/util/format";
import { FullRecipe } from "@/util/types";
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
  Paper,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";

interface Props {
  recipe: FullRecipe;
}

export default function RecipeContent({ recipe }: Props) {
  const { name, description, minutes, ingredients, steps, tags, user_data } =
    recipe;
  return (
    <Container mb="md">
      <Box>
        <Center>
          <Title order={3}>{formatName(name)}</Title>
        </Center>
        <Center>
          <Text>{minutes} Minutes</Text>
        </Center>
        <Center>
          <Group mt="xs">
            {tags.slice(0, 5).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </Group>
        </Center>
      </Box>
      <Stack mt="md">
        <Title order={3}>Description</Title>
        <Text>{description}</Text>
        <Title order={3}>Ingredients</Title>
        <List>
          {ingredients.map((ingredient, i) => {
            return <List.Item key={i}>{ingredient}</List.Item>;
          })}
        </List>
        <Title order={3}>Steps</Title>
        <List type="ordered">
          {steps.map((step, i) => {
            return <List.Item key={i}>{step}</List.Item>;
          })}
        </List>
        {user_data.length && (
          <>
            <Title order={3}>Reviews</Title>
            {user_data.map((review, i) => {
              return (
                <Paper key={i}>
                  <Rating value={review.rating} fractions={2} readOnly />
                  <Text>{review.review}</Text>
                </Paper>
              );
            })}
          </>
        )}
      </Stack>
    </Container>
  );
}
