import {
  Build as BuildIcon,
  Description as DescriptionIcon,
  Person as PersonIcon
} from '@mui/icons-material';

import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type MuiIcon = OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
    muiName: string;
}

export type UserRole = "admin" | "member";

export interface Drawer {
    title: string,
    Icon: MuiIcon,
    path: string,
    roles: UserRole[]
}

export const navbarData: Drawer[] = [
  {
    title: "Projetos",
    Icon: BuildIcon,
    path: "/project",
    roles: ["admin", "member"]
  },
  {
    title: "Contratos",
    Icon: DescriptionIcon,
    path: "/contract",
    roles: ["admin", "member"]
  },
  {
    title: "Usuários",
    Icon: PersonIcon,
    path: "",
    roles: ["admin"]
  }
]