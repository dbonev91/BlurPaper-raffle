// TODO: export in a common repo to can be used from all the microservices
import { environment } from "src/environments/environment";

export const formatURL = (port: number): string => {
    return `${environment.protocol}://${environment.domain}:${port}`;
}

