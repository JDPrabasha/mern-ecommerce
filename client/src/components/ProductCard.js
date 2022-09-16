import { Badge, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="w-72 max-w-72">
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
      <Group position="apart" mt="md" mb="xs">
        <Link to={`/seller/${product.seller}/products/${product._id}/edit`}>
          <p className="flex font-bold text-sm items-center gap-2 border rounded-full border-blue-500 text-blue-500 px-2">
            <AiOutlineEdit />
            EDIT
          </p>
        </Link>
        <p className="flex font-bold text-sm items-center gap-2 border rounded-full  px-2 border-red-500 text-red-500">
          <BsFillTrashFill />
          DELETE
        </p>
      </Group>
    </Card>
  );
}

export default ProductCard;
