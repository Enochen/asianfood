import { formatName } from "@/util/format";
import { BaseRecipe } from "@/util/types";
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Rating,
  Text,
} from "@mantine/core";

interface Props {
  recipe: BaseRecipe;
  detailCallback: () => void;
}

export default function RecipeCard({ recipe, detailCallback }: Props) {
  const { id, name, description, img_link, avg_rating } = recipe;
  return (
    <Box w={300} mx="auto" my="md">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={img_link} height={160} alt="recipe image" />
        </Card.Section>
        <Group position="apart" mt="sm">
          <Text weight={500}>{formatName(name)}</Text>
        </Group>
        <Group position="apart" mt="sm">
          <Rating value={avg_rating} fractions={2} readOnly />
        </Group>
        {/* <Group mt="xs">
          {tags.map((tag) => {
            return (
              <Badge color="grape" variant="outline" key={tag}>
                {tag}
              </Badge>
            );
          })}
          <Badge color="grape" variant="outline">
            30 minutes or less
          </Badge>
          <Badge color="red" variant="outline">
            Chinese
          </Badge>
        </Group>*/}
        <Text size="sm" color="dimmed" mt="xs">
          {description}
        </Text>
        <Button
          variant="light"
          color="blue"
          fullWidth
          radius="md"
          mt="md"
          onClick={detailCallback}
        >
          See details
        </Button>
      </Card>
    </Box>
  );
}
