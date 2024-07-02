package fish.see.LoF_Dashboard_v2.Player;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/player")
public class PlayerController {

    PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers() { return playerService.getPlayers(); }

    @PostMapping
    public void addPlayer(@RequestBody Player player) {
        playerService.addPlayer(player);
    }

}
