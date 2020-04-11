import { GrepolisTown } from './classes/grepolis-town';
import { GrepolisPlayer } from './classes/grepolis-player';
import axios from "axios";
import { DiscordApp } from './main';

export async function getPlayers()
{
    var grepolisPlayers = new Array<GrepolisPlayer>();

    return await axios.get(DiscordApp._grepolisUrl + "players.txt")
        .then((response) => 
        {
            var splitPlayers = response.data.split('\n');
            splitPlayers.forEach((playerRow: string) => 
            {
                var playerSplitted = playerRow.split(",");
                grepolisPlayers.push(new GrepolisPlayer(playerSplitted));
            });
            return grepolisPlayers;
        })
        .catch((error) =>
        {
            console.log(error);
            return grepolisPlayers;
        });
}

export async function getTowns()
{
    var grepolisTowns = new Array<GrepolisTown>();

    return await axios.get(DiscordApp._grepolisUrl + "towns.txt")
        .then((response) => 
        {
            var splitTowns = response.data.split('\n');
            splitTowns.forEach((playerRow: string) => 
            {
                var townSplitted = playerRow.split(",");
                grepolisTowns.push(new GrepolisTown(townSplitted));
            });
            return grepolisTowns;
        })
        .catch((error) =>
        {
            console.log(error);
            return grepolisTowns;
        })
}