package fish.see.LoF_Dashboard_v2.Team;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

    public boolean addTeam(Team team) {
        if (teamRepository.existsById(team.getId())) {
            return false;
        }
        teamRepository.save(team);
        return true;
    }

}
