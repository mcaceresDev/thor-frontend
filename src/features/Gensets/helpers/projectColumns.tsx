// Codigo para definir las columnas de tanstack
import type { ColumnDef } from "@tanstack/react-table";
import type { Genset } from "../genset.types";
import { Info, SquarePen, Trash } from "lucide-react";

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

                    <button className="btn btn-sm btn-outline-warning" onClick={() => onEdit(genset)}>
                        <SquarePen size={16} />
                    </button>

                    {
                        onDelete &&
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => onDelete(genset)}
                        >
                            <Trash size={16} />
                        </button>
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