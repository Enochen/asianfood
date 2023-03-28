import { Badge, Box, Button, Card, Group, Image, Text } from "@mantine/core";

interface Props {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  tags: string[];
  detailCallback: () => void;
}

export default function RecipeCard({
  id,
  name,
  description,
  imageSrc,
  tags,
  detailCallback,
}: Props) {
  return (
    <Box w={300} mx="auto" my="md">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={imageSrc} height={160} alt="recipe image" />
        </Card.Section>
        <Group position="apart" mt="md">
          <Text weight={500}>{name}</Text>
        </Group>
        <Group mt="xs">
          {/* {tags.map((tag) => {
            return (
              <Badge color="grape" variant="outline" key={tag}>
                {tag}
              </Badge>
            );
          })} */}
          {/* <Badge color="grape" variant="outline">
            30 minutes or less
          </Badge>
          <Badge color="red" variant="outline">
            Chinese
          </Badge> */}
        </Group>
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
