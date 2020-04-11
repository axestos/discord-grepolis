import { CommandMessage, Client } from '@typeit/discord';
import { GrepolisTown } from '../classes/grepolis-town';
import { getPlayers, getTowns } from '../grepolis-get-requests';
var AsciiTable = require('ascii-table');

export async function getCityOfPlayer(command: CommandMessage, client: Client)
{
    if(command.params.length === 0)
    {
        command.reply("Geef een gebruikersnaam op voor wie je de steden wilt zien");
        return;
    }

    //Get player based on first given param (https://nl77.grepolis.com/data/players.txt)
    var username = command.params.join(" ");
    var players = await getPlayers();
    var selectedPlayer = players.find((player) => { return player.name.toLowerCase() === username.toLowerCase(); });

    if(!selectedPlayer)
    {
        command.reply("Geen speler gevonden met de opgegeven gebruikersnaam: "+ username);
        return;
    }

    // Get all towns from that player if player ID is found (https://nl77.grepolis.com/data/towns.txt)
    var towns = await getTowns();
    var townsOfPlayer : Array<GrepolisTown> = towns.filter((town) => { return town.player_id === selectedPlayer.id; });
    townsOfPlayer = townsOfPlayer.sort((aTown, bTown) =>
        {
            if(aTown.name < bTown.name) { return -1; }
            if(aTown.name > bTown.name) { return 1; }
                return 0;
        }
    );

    if(townsOfPlayer.length === 0)
    {
        command.reply("Geen steden gevonden voor de speler met de opgegeven gebruikersnaam: "+ username);
        return;
    }

    // Create a nicely formatted string with the towns
    var baseReply = "Stad data voor speler: "+ username + "\n";

    var table = new AsciiTable(selectedPlayer.name + " (" + selectedPlayer.rank + ")");
    table.setHeading('Stad','X-coördinaat','Y-coördinaat','Punten');
    table.setHeadingAlignLeft(0);
    table.setHeadingAlignLeft(1);
    table.setHeadingAlignLeft(2);
    table.setHeadingAlignRight(3); 

    var totalPoints = 0;
    townsOfPlayer.forEach((town) => 
    {
        table.addRow(town.name, town.island_x, town.island_y, town.points.toLocaleString());
        totalPoints += town.points;
    });

    table.setAlignLeft(0);
    table.setAlignLeft(1);
    table.setAlignLeft(2);
    table.setAlignRight(3); 

    table.addRow("------","------","------","-----");
    table.addRow("Totaal", "", "", totalPoints.toLocaleString());

    var stringTable = table.toString();

    command.reply(baseReply);
    command.channel.send(stringTable, {code: true, split: true});
}