import { FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/configRouter/configRouter"
import { RouterProps } from "../type/props.type"

export const AppRouter:FC<RouterProps> = (props) => {
  const {classRouter} = props
  return (
    <div className={classRouter}>
    <Suspense fallback="Loading...">
        <Routes>
        {
          Object.values(routeConfig).map(({element, path}) => (
            <Route
              key={path.toString()}
              path={path}
              element={element}
            />
          ))
        }
        </Routes>
    </Suspense>
    </div>
  )
}
