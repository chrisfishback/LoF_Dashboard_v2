package fish.see.LoF_Dashboard_v2.Player;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
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
    public HttpStatus addPlayer(@RequestBody Player player) {
        if (playerService.addPlayer(player)) {
            return HttpStatus.ACCEPTED;
        }
        return HttpStatus.BAD_REQUEST;
    }

}
