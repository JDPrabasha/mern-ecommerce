import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function CartCard() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="max-w-xs">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} className="font-bold text-sm">
          Norway Fjord Adventures
        </Text>
        <Badge color="pink" variant="light">
          Rs. 5000
        </Badge>
      </Group>
    </Card>
  );
}

export default CartCard;
