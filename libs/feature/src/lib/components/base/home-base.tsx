import { Outlet } from "react-router-dom"
import { SimpleHeader } from "../header"

export const HomeBase = () => {
    return (
        <>
        <SimpleHeader />
        <main>
            <Outlet />
        </main>
        </>
    )
}