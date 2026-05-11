import type { ColumnDef } from "@tanstack/react-table";
import type { Genset } from "../genset.types";
import { Cog, MonitorCog, SquarePen, Trash } from "lucide-react";
// PERMISOS
import { Can } from "../../Auth/components/Can";
import { PERMISSIONS } from "../../Auth/helpers/permissions";

interface Props {
    onEdit: (genset: Genset) => void
    onDelete?: (genset: Genset) => void
}

export const gensetColumns = ({ onEdit, onDelete }: Props): ColumnDef<Genset>[] => [
    {
        accessorKey: "name",
        header: "Nombre"
    },
    {
        accessorKey: "description",
        header: "Descripción"
    },
    {
        accessorKey: "brand",
        header: "Marca"
    },
    {
        accessorKey: "model",
        header: "Descripción"
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
            const genset = row.original

            return (
                <div className="d-flex gap-2 justify-content-center">

                    <Can permission={PERMISSIONS.GENSETS.UPDATE}>
                        <button className="btn btn-sm btn-outline-warning" onClick={() => onEdit(genset)}>
                            <SquarePen size={16} />
                        </button>
                    </Can>

                    {
                        onDelete &&
                        <Can permission={PERMISSIONS.GENSETS.DELETE}>
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
                        <MonitorCog size={16} />
                    </a>

                    <Can permission={PERMISSIONS.GENSETS.DETAILS}>
                        <a
                            className="btn btn-sm btn-outline-warning"
                            href={`/monitoring/${genset.id}`}
                        >
                            <Cog size={16} />
                        </a>

                    </Can>


                </div>
            )
        }
    }
]