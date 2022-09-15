import { Badge, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function ProductCard({ product }) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="w-72 max-w-72">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} className="font-bold text-sm">
          Asus A14
        </Text>
        <Badge color="green" variant="light">
          Rs. 100
        </Badge>
      </Group>
      <Group position="apart" mt="md" mb="xs">
        <p className="flex font-bold text-sm items-center gap-2 border rounded-full border-blue-500 text-blue-500 px-2">
          <AiOutlineEdit />
          EDIT
        </p>
        <p className="flex font-bold text-sm items-center gap-2 border rounded-full  px-2 border-red-500 text-red-500">
          <BsFillTrashFill />
          DELETE
        </p>
      </Group>
    </Card>
  );
}

export default ProductCard;
