import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../user.types";
import { Info, SquarePen, Trash } from "lucide-react";
//PERMISOS
import { Can } from "../../Auth/components/Can";
import { PERMISSIONS } from "../../Auth/helpers/permissions";

interface Props {
    onEdit: (user: User) => void
    onDelete?: (user: User) => void
}

export const userColumns = ({ onEdit, onDelete }: Props): ColumnDef<User>[] => [
    {
        accessorKey: "name",
        header: "Nombre"
    },
    {
        accessorKey: "lastname",
        header: "Apellidos"
    },
    {
        accessorKey: "email",
        header: "Correo"
    },
    {
        accessorKey: "auth_provider",
        header: "Tipo"
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
            const genset = row.original

            return (
                <div className="d-flex gap-2 justify-content-center">

                    <Can permission={PERMISSIONS.USERS.UPDATE}>
                        <button className="btn btn-sm btn-outline-warning" onClick={() => onEdit(genset)}>
                            <SquarePen size={16} />
                        </button>
                    </Can>

                    {
                        onDelete &&
                        <Can permission={PERMISSIONS.USERS.DELETE}>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => onDelete(genset)}
                            >
                                <Trash size={16} />
                            </button>
                        </Can>
                    }

                    <a
                        className="btn btn-sm btn-outline-primary"
                        href={`/monitoring/${genset.id}`}
                    >
                        <Info size={16} />
                    </a>

                </div>
            )
        }
    }
]