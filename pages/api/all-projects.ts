import {ProjectDescriptionData} from "../../types/Api/dataTypes";
import {projects} from "../../app/projects/fakeData";

type HandlerResolve = { status: (arg0: number) => { (): any; new(): any; json: { (arg0: ProjectDescriptionData[] | undefined): void; new(): any; }; }; }

export default function handler(req: any, res: HandlerResolve) {
    res.status(200).json(projects);
}