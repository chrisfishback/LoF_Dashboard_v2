package fish.see.LoF_Dashboard_v2.Team;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping
    public List<Team> getTeams() { return teamService.getTeams(); }

    @PostMapping
    public HttpStatus addTeam(@RequestBody Team team) {
        if (teamService.addTeam(team)) {
            return HttpStatus.ACCEPTED;
        }
        return HttpStatus.BAD_REQUEST;
    }

}
