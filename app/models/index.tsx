import { createRealmContext } from "@realm/react"
import { Task } from "./Task";
//Hook into the schema
export const AppRealmContext = createRealmContext({
    deleteRealmIfMigrationNeeded: true,
    schema: [Task],
});
//Export the imported model from the same files
export { Task }


