export class GrepolisPlayer
{
    public id: number;
    public name: string;
    public alliance_id: number;
    public points: number;
    public rank: number;
    public towns: number;

    constructor(playerAsArray: Array<string>)
    {
        this.id = Number(playerAsArray[0]);
        this.name = decodeURI(playerAsArray[1]?.replace(/[+]/g, " "));
        this.alliance_id = Number(playerAsArray[2]);
        this.points = Number(playerAsArray[3]);
        this.rank = Number(playerAsArray[4]);
        this.towns = Number(playerAsArray[5]);
    };
}