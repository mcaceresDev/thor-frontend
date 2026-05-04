import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createGensetSchema } from "../genset.schema"
import type { CreateGenset } from "../genset.types"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
    closeModal,
    createGenset,
    updateGenset
} from "../gensetSlice"
import { showToast } from "../../../shared/alerts/alert.service"

export const GensetModalForm = () => {
    const dispatch = useAppDispatch()

    const { isModalOpen, selectedGenset } = useAppSelector(
        (state) => state.gensets
    )

    const isEdit = !!selectedGenset

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<any>({
        resolver: zodResolver(createGensetSchema),
        defaultValues: {
            name: "",
            description: "",
            brand: "",
            model: "",
            gateway_model: "",
            capacity: undefined,
            unit_capacity: "",
            host: "",
            http_port: 80,
            http_username_encrypted: "",
            http_password_encrypted: "",
            snmp_version: "v2",
            snmp_port: 161,
            snmp_read_community: "public",
            snmp_write_community: "private",
            is_active: true
        }
    })

    // llenar formulario en edit
    useEffect(() => {
        if (selectedGenset) {
            reset({
                name: selectedGenset.name,
                description: selectedGenset.description || "",
                brand: selectedGenset.brand,
                model: selectedGenset.model || "",
                gateway_model: selectedGenset.gateway_model || "",
                capacity: selectedGenset.capacity ?? undefined,
                unit_capacity: selectedGenset.unit_capacity || "",
                host: selectedGenset.host,
                http_port: selectedGenset.http_port,
                http_username_encrypted: selectedGenset.http_username_encrypted || "",
                http_password_encrypted: selectedGenset.http_password_encrypted || "",
                snmp_version: selectedGenset.snmp_version,
                snmp_port: selectedGenset.snmp_port,
                snmp_read_community: selectedGenset.snmp_read_community,
                snmp_write_community: selectedGenset.snmp_write_community,
                is_active: selectedGenset.is_active
            })
        } else {
            reset({
                name: "",
                description: "",
                brand: "",
                model: "",
                gateway_model: "",
                capacity: undefined,
                unit_capacity: "",
                host: "",
                http_port: 80,
                http_username_encrypted: "",
                http_password_encrypted: "",
                snmp_version: "v2",
                snmp_port: 161,
                snmp_read_community: "public",
                snmp_write_community: "private",
                is_active: true
            })
        }
    }, [selectedGenset, reset])

    const onSubmit = (data: CreateGenset) => {
        if (isEdit) {
            dispatch(updateGenset({
                id: selectedGenset!.id,
                data
            }))
                .unwrap()
                .then(() => {
                    showToast("Generador actualizado correctamente")
                })
                .catch(() => {
                    showToast("Error al actualizar generador", "error")
                })
        } else {
            dispatch(createGenset(data))
                .unwrap()
                .then(() => {
                    showToast("Generador creado correctamente")
                })
                .catch(() => {
                    showToast("Error al crear generador", "error")
                })
        }

        dispatch(closeModal())
    }

    if (!isModalOpen) return null

    return (
        <>
            {/* BACKDROP */}
            < div className="modal-backdrop fade show" > </div>

            < div className="modal fade show d-block" tabIndex={- 1}>
                <div className="modal-dialog modal-dialog-centered modal-lg" >
                    <div className="modal-content text-warning" style={{ backgroundColor: "#303030" }}>

                        {/* HEADER */}
                        < div className="modal-header" >
                            <h5 className="modal-title" >
                                {isEdit ? "Editar Generador" : "Crear Generador"}
                            </h5>

                            < button
                                type="button"
                                className="btn-close"
                                onClick={() => dispatch(closeModal())}
                            />
                        </div>

                        {/* BODY */}
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="row" >

                                    <div className="col-md-6 mb-3" >
                                        <label className="form-label" > Nombre </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("name")} />
                                        {errors.name?.message && <small>{String(errors.name.message)}</small>}
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Marca </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("brand")} />
                                        {errors.brand?.message && <small>{String(errors.brand.message)}</small>}
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Modelo </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("model")} />
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Gateway Model </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("gateway_model")} />
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Capacidad </label>
                                        < input type="number" className="input-transparent form-control form-control-sm" {...register("capacity", { setValueAs: (v) => (v === "" ? undefined : Number(v)) })} />
                                        {errors.capacity?.message && <small>{String(errors.capacity.message)}</small>}
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Unidad </label>
                                        <select
                                            className="input-transparent form-select form-select-sm"
                                            {...register("unit_capacity")}
                                        >
                                            <option value="">Seleccione Unidad</option>
                                            <option value="Glns">Galones</option>
                                            <option value="Lts">Litros</option>
                                        </select>
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Host </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("host")} />
                                        {errors.host?.message && <small>{String(errors.host.message)}</small>}
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > HTTP Port </label>
                                        < input type="number" className="input-transparent form-control form-control-sm" {...register("http_port", { valueAsNumber: true })} />
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > SNMP Version </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("snmp_version")} />
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > SNMP Port </label>
                                        < input type="number" className="input-transparent form-control form-control-sm" {...register("snmp_port", { valueAsNumber: true })} />
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Read Community </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("snmp_read_community")} />
                                    </div>

                                    < div className="col-md-6 mb-3" >
                                        <label className="form-label" > Write Community </label>
                                        < input className="input-transparent form-control form-control-sm" {...register("snmp_write_community")} />
                                    </div>

                                    < div className="col-md-12 mb-3" >
                                        <label className="form-label" > Descripción </label>
                                        < textarea className="input-transparent form-control form-control-sm" {...register("description")} />
                                    </div>

                                    < div className="col-md-6 mb-3 form-check" >
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            {...register("is_active")}
                                        />
                                        < label className="form-check-label" > Activo </label>
                                    </div>

                                </div>

                                < div className="d-flex w-100" >
                                    <button className="btn btn-sm btn-outline-warning mx-auto" >
                                        {isEdit ? "Actualizar" : "Guardar"}
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}