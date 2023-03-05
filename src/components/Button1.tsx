import { Button, Space } from "@mantine/core";

const Button1 = () => {
  return (
    <>
      <Space h='xs' />
      <Button
        variant='outline'
        onClick={() => {
          console.log("call");
        }}
      >
        button
      </Button>
    </>
  );
};

export default Button1;
