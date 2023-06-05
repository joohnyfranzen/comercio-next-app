import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";

export default function UserMenu() {
  const { data: session } = useSession();

  return (
    <div>
      <Menu>
        <MenuButton as={Button} colorScheme="green">
          Conta
        </MenuButton>
        <MenuList>
          <MenuGroup title={session?.user?.name || ""}>
            <MenuItem>Minha Conta</MenuItem>
            <MenuItem>Pedidos </MenuItem>
            <MenuItem>Histórico</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem>
              <Button colorScheme="green" onClick={() => signOut()}>
                Sair
              </Button>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
}
