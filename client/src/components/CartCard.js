import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function CartCard({ product }) {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      className="w-72 max-w-72 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300"
    >
      <Card.Section>
        <Image src={product.image} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} className="font-bold text-sm">
          {product.name}
        </Text>
        <Badge color="green" variant="light">
          Rs. {product.price}
        </Badge>
      </Group>
    </Card>
  );
}

export default CartCard;
