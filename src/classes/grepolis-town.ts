export class GrepolisTown
{
    public id: number;
    public player_id: number;
    public name: string;
    public island_x: number;
    public island_y: number;
    public number_on_island: number;
    public points: number;

    constructor(townAsArray: Array<string>)
    {
        this.id = Number(townAsArray[0]);
        this.player_id = Number(townAsArray[1]);
        this.name = decodeURI(townAsArray[2]?.replace(/[+]/g, " "));
        this.island_x = Number(townAsArray[3]);
        this.island_y = Number(townAsArray[4]);
        this.number_on_island = Number(townAsArray[5]);
        this.points = Number(townAsArray[6]);
    };
}
