import { Badge, Box, Button, Card, Group, Image, Text } from "@mantine/core";

interface Props {
  imageSrc: string;
  name: string;
}

export default function RecipeCard({ imageSrc, name }: Props) {
  return (
    <Box maw={340} mx="auto">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={imageSrc} height={160} alt="recipe image" />
        </Card.Section>
        <Group position="apart" mt="md">
          <Text weight={500}>{name}</Text>
        </Group>
        <Group mt="xs">
          <Badge color="grape" variant="gradient">
            30 minutes or less
          </Badge>
          <Badge color="red" variant="outline">
            Chinese
          </Badge>
        </Group>
        <Text size="sm" color="dimmed" mt="xs">
          Mapo Tofu is a spicy Sichuan dish made with soft tofu and ground pork
          in a sauce of chili bean paste and Sichuan peppercorns.
        </Text>
        <Button variant="light" color="blue" fullWidth radius="md" mt="md">
          See details
        </Button>
      </Card>
    </Box>
  );
}
