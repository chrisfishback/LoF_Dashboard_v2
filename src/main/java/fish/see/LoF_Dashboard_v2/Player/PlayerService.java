package fish.see.LoF_Dashboard_v2.Player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers() { return playerRepository.findAll(); }

    public boolean addPlayer(Player player) {
        if (playerRepository.existsById(player.getId())) {
            return false;
        }

        playerRepository.save(player);
        return true;
    }
}
