import { Route, Routes } from "react-router-dom"
import { HomeBase, PortifolioContainer } from '@pureWorkspace/feature'

export const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeBase />}>
                <Route index element={<PortifolioContainer />}/>
            </Route>
        </Routes>
    )
}